import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var project1 = this.props.data.project1;
      var project2 = this.props.data.project2;
      var project3 = this.props.data.project3;
      var project4 = this.props.data.project4;
      var project5 = this.props.data.project5;
      var project6 = this.props.data.project6;

      var project1Desc = this.props.data.project1Desc;
      var project2Desc = this.props.data.project2Desc;
      var project3Desc = this.props.data.project3Desc;
      var project4Desc = this.props.data.project4Desc;
      var project5Desc = this.props.data.project5Desc;
      var project6Desc = this.props.data.project6Desc;
      



      }
    

    return (
      <>
         <section className="ftco-section ftco-project" id="projects-section">
    	<div className="container-fluid px-md-0">
    		<div className="row no-gutters justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
          	<h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Our Projects</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
    		<div className="row no-gutters">
    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated portfolioImg1">
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">{project1}</a></h3>
    <span>{project1Desc}</span>
	    				</div>
    				</div>
  				</div>
  				<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated portfolioImg2">
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">{project2}</a></h3>
    <span>{project2Desc}</span>
	    				</div>
    				</div>
  				</div>

    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated portfolioImg3">
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">{project3}</a></h3>
	    					<span>{project3Desc}</span>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated portfolioImg4">
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">{project4}</a></h3>
	    					<span>{project4Desc}</span>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated portfolioImg5">
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">{project5}</a></h3>
	    					<span>{project5Desc}</span>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated portfolioImg6">
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">{project6}</a></h3>
	    					<span>{project6Desc}</span>
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

export default Portfolio;
