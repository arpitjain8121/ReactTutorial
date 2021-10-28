import Axios from 'axios';
import React , {createContext , useState , useEffect} from 'react';
import ComA from './ComA'

const FirstName =  createContext();
const LastName =  createContext();

const App = () =>{

  const [num, setNum]  = useState(0);

  const [changeNum , setchangeNum] = useState()

  const [pokName , setpokName] = useState()

  const [moves , setmoves] = useState()


useEffect(() => {
  {/* it calls after the render method */}
document.title = `you clicked me ${num} times`

async function getData(){

  const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${changeNum}`)

  console.log(res)

  setpokName(res.data.name);
  setmoves(res.data.moves.length)

}

getData();


})



  return(
        <>
          { /* Concept of Context Api 
                Three steps of context api used 
                1. createContext()
                2. provider
                3. consumer   */
          }

          <h1>Api Calls on change</h1>
          <h1>My name is <span style={{color:'red'}}>{pokName} </span></h1>
          <h1>My move is <span style={{color:'red'}}>{moves} </span></h1>


          <select style={{width:'100px',padding:'10px' ,fontSize:'20px'}}value={changeNum} onChange= { (e) =>{ setchangeNum(e.target.value)}}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <button onClick = {() =>{setNum(num+1)}}>Click Me {num }</button>

          <FirstName.Provider value={"ARPIT"}>
              <LastName.Provider value="JAIN">
              <ComA />
              </LastName.Provider>
           </FirstName.Provider> 

        </>

  )

}
export default App
export { FirstName , LastName}


