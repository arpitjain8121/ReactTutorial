import React from 'react';
import logo from '../images/logo.png'


const Logo = () =>{
    return(
        <React.Fragment>

            <div className="row">
             <div className="col-lg-12 col-sm-12">
                <img id="img_logo" src= {logo} alt="qpay logo" className=" img_logo center-block mx-auto d-block" />
             </div>
            </div>

        </React.Fragment>
        

    )
}

export default Logo