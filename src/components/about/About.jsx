import React from "react";
import "./about.css";

import AboutMeCard from "./AboutMeCard";


const About = () => {
  
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="about-me-content">
          <AboutMeCard />
      </div>
    </div>
  );
};

export default About;
