import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [results, setResults] = useState("loading")
  const [fname, setFn] = useState("John")
  const [sname, setSn] = useState("doe")

  useEffect(()=>{
      fetchJoke()
  },[])

  const fetchJoke = () =>{
    fetch(`http://api.icndb.com/jokes/random?firstName=${fname}&lastName=${sname}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setResults(data.value.joke)
    })

  }

  return (
    <div className="App">
        <h1>Jokes Gallery</h1>
        <input type="text" className="txtbox" value={fname} onChange={ (e) => setFn(e.target.value)}/>
        <input type="text" className="txtbox" value={sname} onChange={ (e) => setSn(e.target.value)}/>
        <button onClick={()=>fetchJoke(fname, sname)}>Reset Joke Result</button>
        <h3>{results}</h3>
    </div>
  );
}

export default App;
