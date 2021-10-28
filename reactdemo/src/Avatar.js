import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';


class Avatar extends Component{
    constructor(){
        super();
        this.state={
            name: "Welcome To Avatar World"
        }
    }
    namechange(){
        this.setState({
            name: "Subscribe To New Avatar World"
        })
    }
    render(){
        const AvatarArrayList = [
            {
                id: 1,
                name: "Vinod",
                work: "Web Developer"
    
            },{
                id: 2,
                name: "Jiteen",
                work: "Project Manager"
    
            },{
                id: 3,
                name: "Sonu",
                work: "Quality Analyst"
    
            },{
                id: 4,
                name: "Smith",
                work: "BackEnd Developer"
    
            }
    
        ]
    
       const AvatarArrayCard =  AvatarArrayList.map( (AvatarCard ,i) =>{
            return <AvatarList key={i} id={AvatarArrayList[i].id} name= {AvatarArrayList[i].name} work={AvatarArrayList[i].work} />
    
        })


        return (
            <div className="mainPage">
                <h1 className="tc">{this.state.name}</h1>
                    {AvatarArrayCard}
               <button onClick={ () => this.namechange()}> Subscribe</button>
            </div>
        ) 

    }
}



export default Avatar;