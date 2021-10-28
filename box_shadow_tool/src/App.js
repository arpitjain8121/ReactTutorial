import React, {useState} from 'react';
import './App.css';

const App = () =>{

  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [Color, setColor] = useState('black')
  const [Check, setCheck] = useState(false)


  return(
      <div className="">
          <h3 className="boxHeading">Box - Shadow Tool Generator</h3>
          <div className="App">
          <div className="controls">
              <div>
                <label>Horizontal Length</label>
                
                  <input type="range" id="" min="-100" max="100" value ={Hori} onChange = {(e)=>setHori(e.target.value)} />
                
              </div>

              <div>
                <label>Vertical Length</label>
                <input type="range" id="" min="-100" max="100" value={Veri} onChange = {(e)=>setVeri(e.target.value)} />
              </div>

              <div>
                <label>Blur Length</label>
                <input type="range" id="" min="0" max="100" value={Blur} onChange = {(e)=>setBlur(e.target.value)} />
              </div>

              <br></br>
              <div>
                <label>Color &nbsp;</label>
                <input type="color"  value={Color} onChange = {(e)=>setColor(e.target.value)} />
              </div>

              <br></br>

              <div className="switch">
                    <label>
                      Outine
                      <input type="checkbox" checked={Check} onChange= { ()=> setCheck(!Check)} />
                      <span className="lever"></span>
                      Inset
                    </label>
                  </div>

          </div>
          <div className="output">
              <div className="box" style={{boxShadow:`${Check ? "inset" : ""} ${Hori}px ${Veri}px ${Blur}px ${Color}` }}>
  <p>Box-shadow : {Hori}px {Veri}px {Blur}px {Color}</p>

              </div>
          </div>
</div>
      </div>

  )
}

export default App;

