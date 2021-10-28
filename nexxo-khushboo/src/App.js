import './App.css';
import Quote from './Components/quote';
import Author from './Components/author';
import Buttons from './Components/buttons';
import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');

function App() {
  const [ quote, setQuote ] = useState('');
  const [author, setAuthor] = useState('');
  const [font, setFont] = useState('');
  const [color, setColor] = useState('');
  function fetchFont(){
    return ['cursive', 'emoji', 'fangsong', 'monospace'][Math.floor(Math.random() * 4)];
  }
  function fetchColor(){
    return ['blue', '##ff3b00', 'blueViolet', 'brown' ][Math.floor(Math.random() * 4)];
  }
  async function callQuotesApi() {
    await fetch('https://api.quotable.io/random')
  .then(res => res.json())
  .then(data => {
    setAuthor(data.author);
    setQuote(data.content);
    setFont(fetchFont());
    setColor(fetchColor());
  })
  .catch(err => console.log(`An Error Occurred ${err}`));
  }
  useEffect(() => {
    callQuotesApi();
  }, []);

  return (
    <div id='quote-box' className='wrapper' style = {{border: `1rem solid ${color}`}}>
      <div className='quote-author'>
      <Quote quote = {quote} font = {font} color = {color}/>
      <Author author = {author} font = {font} color = {color}/>
      </div>
      <Buttons callQuotesApi = {callQuotesApi} color = {color}/>
    </div>
  );  
}

export default App;