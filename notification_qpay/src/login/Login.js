import React  from 'react';   
import { Redirect} from 'react-router-dom';
import Logo from './Logo';

// intialization
const initialState = {
    email:"",
    password:"",
    emailError: "",
    passwordError:"",
    redirect:null,
}
   
 class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = initialState
    }
// onchange event
    handleChange = event =>{
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name] :isCheckbox ? event.target.checked:event.target.value
        });
    };

// check validation input field

    validate = () =>{
        let emailError = "";
        let passwordError = "";

        if(!this.state.email.includes('@')){
            emailError = 'invalid email address'
        }

        if(!this.state.password){
            passwordError = "Please fill the password"
        }
        if(emailError || passwordError){
            this.setState({emailError , passwordError})
            return false;
        }

        return true;
    };

 // submit form   
    handleSubmit = (event) =>{
        event.preventDefault();
        const isValid = this.validate();
        
        if(isValid){
            this.setState(initialState)           
            this.setState({                
                redirect: "/Dashboard"
            })
        }      
    }
     render(){
        if (this.state.redirect) {
           return <Redirect to= {this.state.redirect} />
        }

         return(
             <React.Fragment>
                 <div className="container-fluid">
                     <Logo />
                     <div className="row">
                         <div className="col-lg-12">
                             <div className="card signIn">
                                 <div className="card-body">
                                     <div className="row">
                                         <div className="col-lg-12">
                                             <h2 className="signIn__heading">Sign in to your account</h2>
                                         </div>
                                     </div> 
                                     <div className="row">
                                         <div className="col-lg-12">
                                             <form onSubmit ={this.handleSubmit}>
                                                 <div className="row">
                                                     <div className="col-lg-12">
                                                         <div className="form-group signIn__FormGroup">
                                                              <input className="form-control signIn__email" name="email" id="email" placeholder="Email"  value= {this.state.email} autoComplete="off" onChange={this.handleChange }/>
                                                              
                                                              <div className="error-message">{this.state.emailError}</div>
                                                         </div>
                                                     </div>
                                                 </div>

                                                 <div className="row">
                                                     <div className="col-lg-12">
                                                          <div className="form-group signIn__FormGroup">
                                                              <input type="password" className="form-control signIn__password" name="password" id="password" placeholder="Password" value= {this.state.password} onChange={this.handleChange } autoComplete="off" />

                                                              <div className="error-message"> <span>{this.state.passwordError}</span></div>
                                                         </div>
                                                     </div>
                                                 </div>


                                                 <div className="row">
                                                     <div className="col-lg-12">
                                                         <button type="submit" className="signIn__btn">Sign In</button>
                                                     </div>
                                               </div>
                                             </form>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

                    <footer>

                        <div className="row text-center mt-3" >
                            <div className="col-lg-12" style={{fontSize:'14px'}}>
                            <span><i className="fa fa-copyright"></i></span>
                            <span id="copyright_year">2020</span>
                                &nbsp;powered by QPAY International Corporation

                            </div>
                        </div>
                        
                        
                    </footer>    

                 </div>
             </React.Fragment>
         )

     }
}


export default Login;