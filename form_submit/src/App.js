import React, {useState} from 'react';
import './App.css';

const App = () =>{
  const [FullName, setFullName] =  useState({
    fname:'',
    lname:'',
  })


  const inputEvent = (e) =>{
      const value = e.target.value;
      const name = e.target.name;

      setFullName( (prevValue) =>{

        if(name === 'fName'){
         return{ 
            fname: value,
            lname:prevValue.lName,
         }
        } else if(name === 'lName'){
          return{ 
            fname: prevValue.fName,
            lname:value,
          }
        } 
      });
  }



  const onSubmit = (e) =>{
    e.preventDefault();
 
  }


  return(
      <React.Fragment>
          <div className="App">
            <form onSubmit={onSubmit}>
              <div>
                <h1 className="App-header">Hello {FullName.fname} {FullName.lname}</h1>
                <input type="text" placeholder="Enter Your FirstName" name="fName" onChange={inputEvent} value={FullName.fname}/>

                <input type="text" placeholder="Enter Your LastName" name="lName" onChange={inputEvent} value={FullName.lname}/>
                <button type="submit">Click Me 👍</button>
              </div>
            </form>
          </div>
        





      </React.Fragment>
    
  )
}

export default App;
