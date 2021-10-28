import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{

    state={
        user:[{id:12,name:"mukesh"},{id:13,name:"suresh"},{id:14,name:"ramesh"}]
    }

    render(){
        const MyName = this.state.user.map((item) =>{
        return <Link to={"/" + item.id}><h2>{item.name}</h2></Link>
        })
        return (
            <h1>{MyName}</h1>
        )

    }
    
}

export default Home;