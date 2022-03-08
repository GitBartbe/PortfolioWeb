import React from "react";
import "./project.css";
import ToDo from "./ToDo";

function Projects() {
  return (
      <div className="projects" id="projects">
        <div className="projects-content">
          <h1>Projects</h1>
            <ToDo />
      </div>
      </div>
  );
}

export default Projects;
