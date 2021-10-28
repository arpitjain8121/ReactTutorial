import React, { Component } from 'react';
import './style.css';


const randomQuotes = [
    "Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!",
    "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
    "The best thing about the future is that it comes one day at a time.",
    "The only mystery in life is why the kamikaze pilots wore helmets.",
    "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
    "The difference between stupidity and genius is that genius has its limits"
  ]
 
export default class QuoteTile extends Component {
  state = {
    currentIndex: 0,
    quotes: ''
  }
  
 getIndex = () => {
    const min = 0;
    const max= randomQuotes.length - 1;
    return Math.floor(Math.random() * (max - min) + min);
};

 getNextQuote = ()=> this.setState(state => ({currentIndex: this.getIndex()}));
  render() {
    
    return (
      <div className="App">
        <TitleQuote 
         getNextQuote = {this.getNextQuote}
          quotes={randomQuotes}
          currentIndex={this.state.currentIndex}
          /> 
      </div>
    );
  }
}
const TitleQuote = (props) => 
(
  <div id="quote-box">
    <div className='quoteborder'>
                <h4> {props.quotes[props.currentIndex]}</h4>
            </div>
            <button  className="btn btn-danger pos " onClick={props.getNextQuote}>NEXT QUOTE</button>
    
    <a class="btn btn-block btn-social btn-twitter" href={`https://twitter.com/intent/tweet?text=${props.quotes}`}>
    <i class="fa fa-twitter fa-7x"></i>
    </a>
  </div>
)