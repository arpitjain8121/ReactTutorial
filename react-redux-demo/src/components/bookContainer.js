import React , {useState} from 'react'
import {buyBook} from '../redux'
import {connect} from 'react-redux'

function BookContainer(props){

    const [number, setNumber] = useState(1)

    return(
        <div>
            <h1>Number of Books - {props.numberOfBooks}</h1>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button type="button" onClick={() => props.buyBook(number)}>{number} Buy Book</button>
        </div>
    )
}

const mapStatetoProps = (state) =>{
    return{
        numberOfBooks: state.numberOfBooks
    }
}

const mapDispatchtoProps =(dispatch)=>{
    return{
        buyBook:function(number){
            dispatch(buyBook(number))
        }
    }
} 
 

export default connect(mapStatetoProps , mapDispatchtoProps)(BookContainer)