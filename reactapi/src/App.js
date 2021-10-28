import React ,{useState , useEffect} from 'react';

import Axios from 'axios'



const App = () =>{
  const [Items, setItems] = useState();  

  useEffect(() => {
    async function getData (){
      const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
      
    }
    getData();
  })
  return(
      <ul>
      </ul>
    
  )
  
}


export default App;
