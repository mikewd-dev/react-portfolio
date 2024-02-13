import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <>
      <div id="projects" className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li className="project-name">{props.name}</li>
            <li className="project-description">{props.description}</li>
          </ul>
        </div>
        <div className="buttonLinks">
          <a
            className="btn btn-primary ms-3 me-auto px-5"
            href={props.url}
            role="button"
          >
            Site
          </a>
          <a
            className="btn btn-info ms-auto me-3 px-5"
            href={props.source}
            role="button"
          >
            Code
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
