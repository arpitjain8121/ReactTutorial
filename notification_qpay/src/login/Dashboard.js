import React from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../images/logo.png';


class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            redirect:null
        }
    }
    logout = () => {     
        this.setState({
            redirect: "/"
        })
    }

    sendSMSMessage= () => {
        this.setState({
            redirect: "/Notification"
        })
    }

    FCM= () => {
        this.setState({
            redirect: "/Notification"
        })
    }

    Email= () => {
        this.setState({
            redirect: "/Notification"
        })
    }

    inApp= () => {
        this.setState({
            redirect: "/Notification"
        })
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to= {this.state.redirect} />
         }
        return(
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <img id="img_logo_dashboard" src= {logo} alt="qpay logo" className=" img_logo" />
                    </div>

                    <div className="col-lg-6">
                        <button className="btn btn-primary logout__btn" onClick={() =>this.logout()}>Logout</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-left">
                        <h2>Dashboard</h2>
                    </div>
                </div>

                <div className="row text-center mt-5">
                    <div className="col-lg-3">
                        <div className="card" style={{background:'#25d1d3', color:'#fff'}}>
                            <div className="card-body sms__body" onClick= {()=>this.sendSMSMessage()}>
                                <h3 style={{marginBottom:'0'}}> <i className="fa fa-commenting-o" aria-hidden="true"></i> SMS</h3>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3">
                        <div className="card" style={{background:'#1E7EAC', color:'#fff'}}>
                            <div className="card-body sms__body" onClick= {()=>this.FCM()} >
                                <h3 style={{marginBottom:'0'}}><i className="fa fa-telegram" aria-hidden="true"></i> FCM</h3>
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-3">
                        <div className="card" style={{background:'#E80000', color:'#fff'}}>
                            <div className="card-body sms__body" onClick= {()=>this.Email()}>
                                <h3 style={{marginBottom:'0'}}><i className="fa fa-envelope" aria-hidden="true"></i> EMAIL</h3>
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-3">
                        <div className="card" style={{background:'#25d3a8', color:'#fff'}}>
                            <div className="card-body sms__body" onClick= {()=>this.inApp()}>
                                <h3 style={{marginBottom:'0'}}><i className="fa fa-tablet"></i> IN APP</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>            
        </>
    )
    }

}



 

export default Dashboard