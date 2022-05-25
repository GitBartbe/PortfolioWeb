import Project from "./Project";
import BurgerBrowser from "../../img/burger-browser.png";
import StarWarsBrowser from "../../img/star-wars-browser.png";
import Picture3DBrowser from "../../img/3d-picture-browser.png";
import StarwarsMobile from "../../img/mobile-star-wars.png";
import BSbackground from "../../img/cover-1.png";
import SWbackground from "../../img/cover-2.png";
import Background3D from "../../img/cover-3.png";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects-content">
        <Project
          backgroundImage={BSbackground}
          title={"Burger Store"}
          type={"React e-comerce aplication"}
          imageUrl={BurgerBrowser}
        />

        <Project
          backgroundImage={SWbackground}
          title={"Star Wars Encyclopedia"}
          type={"React aplication"}
          imageUrl={StarWarsBrowser}
          imageUrlMobile={StarwarsMobile}
        />

        <Project
          backgroundImage={Background3D}
          imageUrl={Picture3DBrowser}
          title={"3D picture preview interface"}
          type={"React aplication"}
        />
      </div>
    </div>
  );
};

export default Projects;
