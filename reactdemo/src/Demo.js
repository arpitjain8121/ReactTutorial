import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';


class Demo extends Component{
    render(){
        return (
            <div className="divMain__Style">
                 <h1>Hello {this.props.name}</h1>
                 <p>Welcome to my channel :)</p>
            </div>
           
            )
    }
}

export default Demo