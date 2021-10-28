import React from 'react';
import web from '../src/images/camp.png';
import Common from './Common';

const About = () =>{
  return (
      <div>
          <Common name ="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now"/>
           
      </div>
    
  )
}

export default About;
