import React from 'react';
import './App.css';
import Login from './login/Login';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import NotifySMS from './notification/Notification'
// import Notification , {NotifySMS , NotifyInApp , NotifyEmail} from './login/Notification'
// import NotifySMS from './login/NotifySMS';
// import NotifyFCM from './login/NotifyFCM';
// import NotifyEmail from './login/NotifyEmail';
// import NotifyInApp from './login/NotifyInApp.js';



function App() {
  return (
    <div className="App">
         <Switch>
            <Route exact path="/" component={Login}/>
             <Route exact path="/Dashboard" component={Dashboard}/> 
              <Route exact path="/Notification" component={NotifySMS}/> 

             {/* <Route exact path="/Notification" component={NotifySMS}/> 
             <Route exact path="/Notification" component={NotifyFCM}/>
             <Route exact path="/Notification" component={NotifyEmail}/>
             <Route exact path="/Notification" component={NotifyInApp}/> */}
        </Switch> 
    </div>
  );
}

export default App;
