import React from 'react';
import logo from '../images/logo.png';
import NotifySMS from '../notification/Notification'
import { useHistory } from 'react-router-dom';



const Heading = () =>{
    const history = useHistory();
    const logout = () =>{
        history.push("/")
    }
    
    return(
            <>
                <div className="col-lg-6">
                    <img id="img_logo_dashboard" src= {logo} alt="qpay logo" className=" img_logo" />
                </div>

                <div className="col-lg-6">
                    <button className="btn btn-primary logout__btn" onClick={() =>logout()}>Logout</button>
                </div>
                       
            </>
        )
    }

const DashboardName = () =>{
    return(
        <>
            <div className="col-lg-12 text-left">
                <h2>Dashboard</h2>
            </div>   
        </>
    )
}

const Card = (props) =>{

   const onTaskClicked = (taskName) =>{
       
       if(taskName === 'sendSMSMessage'){
          return <NotifySMS />                

       }else if(taskName === 'FCM'){
           console.log("FCM")
       }else if(taskName === 'Email'){
            console.log("Email")
        }else{
            console.log("In APP")
        }

   }
    
    return(
        <>
            <div className="col-lg-3">
                <div className="card" style={{background: props.stylebackground , color:'#fff'}}>
                    <div className="card-body sms__body" onClick={()=>{onTaskClicked(props.links)}}>
                        <h3 style={{marginBottom:'0'}}> <i className={props.iconstyle} aria-hidden="true"></i> {props.sname}</h3>
                    </div>
                </div>
            </div>
        </>
    )

}


export {Card, DashboardName, Heading}