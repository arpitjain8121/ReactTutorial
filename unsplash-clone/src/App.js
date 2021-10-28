import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [results , setResults] = useState([])

const fetchImages = () =>{
  fetch(`https://api.unsplash.com/search/photos?client_id=Hi1dBeDVdnjUVG0JEhIB9zow-_U-SZD-h3EeFVExK7Y&query=${value}&orientation=squarish`)
  .then(res => res.json())
  .then(data =>{
    setResults(data.results);
  })

}
  return(
      <div className="App">
			<div><h3>Image Gallery</h3></div>
          <div className="myDiv">
              <span><b>Search:- </b></span>
              <input className="txtbox" type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
              <button className="sendBtn" onClick={()=> fetchImages()}>Send</button>
          </div>

          <div className="gallery">
              {
                results.map((item)=>{
                  return <img class="item" key ={item.id} src= {item.urls.regular} alt="my gallery" />
                })
              }
          </div>

      </div>
  )
  
        
    
}

export default App;
