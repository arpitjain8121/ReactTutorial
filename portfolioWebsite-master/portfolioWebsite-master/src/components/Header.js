import React, { Component } from 'react';

class Header extends Component {

   componentDidMount(){
      var TxtRotate = function(el, toRotate, period) {
         this.toRotate = toRotate;
         this.el = el;
         this.loopNum = 0;
         this.period = parseInt(period, 10) || 2000;
         this.txt = '';
         this.tick();
         this.isDeleting = false;
       };
       
       TxtRotate.prototype.tick = function() {
         var i = this.loopNum % this.toRotate.length;
         var fullTxt = this.toRotate[i];
       
         if (this.isDeleting) {
           this.txt = fullTxt.substring(0, this.txt.length - 1);
         } else {
           this.txt = fullTxt.substring(0, this.txt.length + 1);
         }
       
         this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
       
         var that = this;
         var delta = 300 - Math.random() * 100;
       
         if (this.isDeleting) { delta /= 2; }
       
         if (!this.isDeleting && this.txt === fullTxt) {
           delta = this.period;
           this.isDeleting = true;
         } else if (this.isDeleting && this.txt === '') {
           this.isDeleting = false;
           this.loopNum++;
           delta = 500;
         }
       
         setTimeout(function() {
           that.tick();
         }, delta);
       };
       
       window.onload = function() {
         var elements = document.getElementsByClassName('txt-rotate');
         for (var i=0; i<elements.length; i++) {
           var toRotate = elements[i].getAttribute('data-rotate');
           var period = elements[i].getAttribute('data-period');
           if (toRotate) {
             new TxtRotate(elements[i], JSON.parse(toRotate), period);
           }
         }
         // INJECT CSS
         var css = document.createElement("style");
         css.type = "text/css";
         css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
         document.body.appendChild(css);
       };
       
       
   }


  render() {

    if(this.props.data){
      var name = this.props.data.name;
      // var occupation= this.props.data.occupation;
      // var description= this.props.data.description;
      // var city= this.props.data.address.city;
      // var networks= this.props.data.social.map(function(network){
      //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // })
    }

    return (

      <>

<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
	    <div className="container d-flex w-100">
	      {/* <a className="navbar-brand" href="index.html"><span>C</span>Goyal</a> */}

        <a className="navbar-brand" href="index.html">
          <img src="/images/logo.png" className="img-fluid"></img>
        </a>

	      <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span></button>

     

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav nav ml-auto">
	          <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
	          <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
	          <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
	         
	          <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
	         
	          <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>










      <section className="hero-wrap js-fullheight" id="home-section">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center fadeInUp ftco-animated">
          	<div className="text text-center">
          		<span className="subheading">Hey! I am</span>
    <h1>{name}</h1>
			  				<h2>I'm a &nbsp;
								  <span
								     className="txt-rotate"
								     data-period="2000"
								     data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'></span>
								</h2>
							</div>
            </div>
          </div>
        </div>
      
      <div className="mouse">
				<a href="#" className="mouse-icon">
					<div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
				</a>
			</div>
    </section>


      
      </>
     
    );
  }
}

export default Header;
