import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){

      var year = this.props.data.educationCollege.year;
      var degree = this.props.data.educationCollege.degree;
      var university = this.props.data.educationCollege.university;
      var description = this.props.data.educationCollege.description;

      var workyears =  this.props.data.work.years;
      var worktitle =  this.props.data.work.title;
      var workcompany =  this.props.data.work.company;
      var workdescription =  this.props.data.work.description;

          
    }

    return (
      <>
            <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-3">
				    <nav id="navi">
					    <ul>
					      <li><a href="#page-1">Education</a></li>
					      <li><a href="#page-2">Experience</a></li>
					      <li><a href="#page-3">Skills</a></li>
					      
					    </ul>
					  </nav>
					</div>
					<div className="col-md-9">
					  <div id="page-1" className= "page one">
					  	<h2 className="heading">Education</h2>
					    <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
					    	<div className="icon d-flex align-items-center justify-content-center">
					    		<span className="flaticon-ideas"></span>
					    	</div>
					    	<div className="text pl-3">
                  <span className="date">{year}</span>
		    					<h2>{degree}</h2>
                  <span className="position">{university}</span>
                  <p>{description}</p>
	    					</div>
	    				</div>
	    			
	    			
	    				
					  </div>

					  <div id="page-2" className= "page two">
					  	<h2 className="heading">Experience</h2>
					    <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
					    	<div className="icon d-flex align-items-center justify-content-center">
					    		<span className="flaticon-ideas"></span>
					    	</div>
					    	<div className="text pl-3">
    <span className="date">{workyears}</span>
    <h2>{worktitle}</h2>
    <span className="position">{workcompany}</span>
    <p>{workdescription}</p>
		    				</div>
	    				</div>	    				
					  </div>
					  <div id="page-3" className= "page three">
					  	<h2 className="heading">Skills</h2>
              <div className="row">							
									<div className="col-md-6">
										<div className="services animate-box fadeInUp animated">
											<h3>1 - Graphic Design</h3>
											<ul>
												<li>UI Design</li>
												<li>Website &amp; Digital Design</li>
												<li>Brading &amp; Visual Identity</li>
												<li>Print Design</li>
                        <li style={{visibility:'hidden'}}></li>
                        
											</ul>
										</div>
										<div className="services animate-box fadeInUp animated">
											<h3>3 - Front End Development</h3>
											<ul>
												<li>HTML / CSS</li>
												<li>JS &amp; Jquery Startup</li>
												<li>WordPress</li>
												<li>Jomla</li>
											</ul>
										</div>
									</div>
									<div className="col-md-6">
										<div className="services animate-box fadeInUp animated">
											<h3>2 - Illustration</h3>
											<ul>
												<li>Editorial</li>
												<li>Narrative</li>
												<li>Motion Graphics</li>
												<li>Animation</li>
												<li>Visual Effects</li>
											</ul>
										</div>
										<div className="services animate-box fadeInUp animated">
											<h3>4 - Web Marketing</h3>
											<ul>
												<li>Sales Marketing</li>
												<li>Invoice</li>
												<li>eCommerce</li>
											</ul>
										</div>
									</div>
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

export default Resume;
