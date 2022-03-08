import React from 'react';
import './home_top.css'

import wave1 from "../../img/course-wave2.svg";
import spaceman from "../../img/Spaceman.png";


export default function HomeTop() {
  return(

    <div className="container-top">

        <div className="main-title">
          <h1> Welcome to </h1>
          <h2>this.Future</h2>
        </div>

        {/* <div className="top-right">
          <img className="spaceman" src={spaceman}></img>
        </div> */}
        <div className="top-waves">
          <img className="wave-1" src={wave1}></img>
          <div className="wave-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="var(--cart-background)"
                fill-opacity="1"
                d="M0,96L60,90.7C120,85,240,75,360,90.7C480,107,600,149,720,144C840,139,960,85,1080,96C1200,107,1320,181,1380,218.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

  );
}



