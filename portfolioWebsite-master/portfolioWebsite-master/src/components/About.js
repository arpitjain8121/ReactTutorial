import React, { Component } from 'react';


class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;    
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var dob= this.props.data.dob;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
     
    }

    return (
         <>
   <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
    	<div className="container">
    		<div className="row d-flex no-gutters">
    			<div className="col-md-6 col-lg-6 d-flex">
    				<div className="img-about img d-flex align-items-stretch">
    					<div className="overlay"></div>
	    				<div className="img d-flex align-self-stretch align-items-center aboutImg" style={{}}>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-6 pl-md-5 py-5">
    				<div className="row justify-content-start pb-3">
		          <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
		          	<h1 className="big">About</h1>
		            <h2 className="mb-4">About Me</h2>
		            <ul className="about-info mt-4 px-md-0 px-2">
    <li className="d-flex"><span>Name:</span> <span>{name}</span></li>
    <li className="d-flex"><span>Date of birth:</span> <span>{dob}</span></li>
    <li className="d-flex"><span>Address:</span> <span>{street} {city} {state}</span></li>
		            	<li className="d-flex"><span>Zip code:</span> <span>{zip}</span></li>
    <li className="d-flex"><span>Email:</span> <span>{email}</span></li>
    <li className="d-flex"><span>Phone: </span> <span>{phone}</span></li>
		            </ul>
		          </div>
		        </div>
	          <div className="counter-wrap ftco-animate fadeInUp ftco-animated d-flex mt-md-3">
              <div className="text">
              
                <p><a href="https://drive.google.com/file/d/1oYtMgttPnai6EeQ_46F9cn-mkEtKCtxa/view?usp=sharing" className="btn btn-primary py-3 px-3" download>Download CV</a></p>
              </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>
         
         
         
         
         </>
      
    );
  }
}

export default About;
