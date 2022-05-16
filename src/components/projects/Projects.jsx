import React from "react";
import ProjectComponent from "./project-component";
import "./projects.css";
import BurgerBrowser from "../../img/burger-browser.png";
import StarWarsBrowser from "../../img/star-wars-browser.png"
import Picture3DBrowser from "../../img/3d-picture-browser.png"
import StarwarsMobile from "../../img/mobile-star-wars.png"
import BSbackground from "../../img/cover-1.png"
import SWbackground from "../../img/cover-2.png"
import Background3D from "../../img/cover-3.png"



 const Projects = () => {
  return (
      <div className="projects" id="projects">
        <div className="projects-content">
          <h1>Projects</h1>
          <ProjectComponent 
          backgroundImage={BSbackground}
          title={'Burger Store'} 
          type={'React e-comerce aplication'} 
          imageUrl={BurgerBrowser}
          />
         
          <ProjectComponent 
          backgroundImage={SWbackground}
          title={'Star Wars Encyclopedia'} 
          type={'React aplication'}
          imageUrl={StarWarsBrowser}
          imageUrlMobile={StarwarsMobile}
          />
          

          <ProjectComponent 
          backgroundImage={Background3D}
          imageUrl={Picture3DBrowser}
          title={'3D picture preview interface'} 
          type={'React aplication'}
          
          
          />

      </div>
      </div>
  );
}

export default Projects;
