import React, { Component } from 'react'


const Notification = () =>{
    return(
            <>
                {NotifySMS}
                {NotifyInApp}
                {NotifyEmail}
            </>
    )
}


const NotifySMS = () =>{
    return(
            <>
                <h3>hello SMS</h3>
            </>
    )
}


const NotifyInApp = () =>{
    return(
            <>
                <h3>hello InApp</h3>
            </>
    )
}


const NotifyEmail = () =>{
    return(
            <>
                <h3>hello Email</h3>
            </>
    )
}





export default Notification

export {NotifySMS , NotifyInApp , NotifyEmail}