import React from "react";
import "./about.scss";

import AboutMeCard from "./AboutMeCard";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <AboutMeCard />
    </div>
  );
};

export default About;
