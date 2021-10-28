import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();

    var fullHeight = function() {
  
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
      });
  
    };
    fullHeight();
  
    // loader
    var loader = function() {
      setTimeout(function() { 
        if($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, 1);
    };
    loader();

    var burgerMenu = function() {
      $('body').on('click', '.js-fh5co-nav-toggle', function(event){
        event.preventDefault();
        if ( $('#ftco-nav').is(':visible') ) {
          $(this).removeClass('active');
        } else {
          $(this).addClass('active');	
        }
        
      });
  
    };
    burgerMenu();

    
    

    var scrollWindow = function() {
      $(window).scroll(function(){
        var $w = $(this),
            st = $w.scrollTop(),
            navbar = $('.ftco_navbar'),
            sd = $('.js-scroll-wrap');
  
        if (st > 150) {
          if ( !navbar.hasClass('scrolled') ) {
            navbar.addClass('scrolled');	
          }
        } 
        if (st < 150) {
          if ( navbar.hasClass('scrolled') ) {
            navbar.removeClass('scrolled sleep');
          }
        } 
        if ( st > 350 ) {
          if ( !navbar.hasClass('awake') ) {
            navbar.addClass('awake');	
          }
          
          if(sd.length > 0) {
            sd.addClass('sleep');
          }
        }
        if ( st < 350 ) {
          if ( navbar.hasClass('awake') ) {
            navbar.removeClass('awake');
            navbar.addClass('sleep');
          }
          if(sd.length > 0) {
            sd.removeClass('sleep');
          }
        }
      });
    };
    scrollWindow();
    var sections = [];
    var id = false;
    var $navbara = $('#navi a');

    $navbara.each(function(){
       sections.push($($(this).attr('href')));
       
     })

    $(window).scroll(function(e){
      var scrollTop = $(this).scrollTop() + ($(window).height()/2);
      for (var i in sections) {
        var section = sections[i];        
        if (scrollTop > section.offset().top){
          var scrolled_id = section.attr('id');
        }
      }
      if (scrolled_id !== id) {
        id = scrolled_id;
        $($navbara).removeClass('current');
        $('#navi a[href="#' + id + '"]').addClass('current'); 
      }
    })
  }

  componentWillMount(){

    var onePageClick = function() {
      $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
        event.preventDefault();
        var href = $.attr(this, 'href');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-90
        }, 500, function() {
        });
      });
  
    };
  
    onePageClick();

  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.main}/>
        <Contact data={this.state.resumeData.main}/>
      
     
      </div>
    );
  }
}

export default App;