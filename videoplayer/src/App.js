import React, {useState, useEffect} from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter, Route} from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Profile from './components/Profile'


// function App(){

//   const [name, setName] = useState("Arpit") 
//   const [age, setAge] = useState(20) 

//   const Increment = () =>{
//     setAge( age + 2)
//   }

//   const Column = ()=>{
//     return (
//       <React.Fragment>
//           <td>Rohit</td>
//           <td>Mohit</td>
//           <td>Pohit</td>

//       </React.Fragment>

//     )
//   }


//   const MyFragment =()=>{
//     return (
//       <table>
//         <tbody>
//           <tr>
//             <Column />
//           </tr>
//         </tbody>

//       </table>
//     )
//   }
  

//  useEffect(() => {
//    console.log("use effect called")
   
//  }, [name]) 

//  const fullname = "Arpit Jain "

//  const currDate = new Date().toLocaleDateString();
//  const currTime = new Date().toLocaleTimeString();

//   return(
//     <div className="App">
//       <h1>React Hooks</h1>
//       <h1>{name}</h1>
//       <h1>{age}</h1>

//       <button onClick = { () => setName("Ramesh")}>Change Name</button>
//       <button onClick = { () => Increment()}>Change age</button>

//       <br />
        
//           <h1>My Name is {fullname}</h1>
//           <p>Current Date is <b>{currDate}</b> </p>
//           <p>Current Date is <b>{currTime}</b></p>
//           <MyFragment />
        

//     </div>


//   )
// }


// class App extends React.Component {
//   render(){
//     return(
//       <BrowserRouter> 
//         <div className="App">
//           <Navbar />

//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/:profile_id" component={Profile}/>

//         </div>
//         </BrowserRouter>
//     )
//   }
 
 
// }


function App(){

  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting = ""

  if(currDate >= 1 && currDate < 12 ){
      greeting = "Good Morning"
  }else if(currDate >= 12 && currDate < 19 ){
    greeting = "Good Afternoon"
  }else{
    greeting = "Good Night"
  }


  return (
    <div>
        <h1>Hello Sir, {greeting}</h1>



    </div>
  )
}


export default App;
