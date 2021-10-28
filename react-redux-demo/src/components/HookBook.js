import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {buyBook} from '../redux'

function HookBook(){

    const numberOfBooks = useSelector(state => state.numberOfBooks)
    const dispatch = useDispatch()
    return(
        <>
            <h1>Hook Container</h1>
            <h3>Number of books - {numberOfBooks}</h3>
            <button onClick= {() =>dispatch(buyBook())}>BuyBook</button>
        </>

    )
}

export default HookBook