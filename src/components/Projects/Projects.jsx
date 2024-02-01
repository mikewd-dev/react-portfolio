import "./Projects.css";

function Projects(props) {
  return (
<>
<a href={props.url}>
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">

        <ul>
          <li className="project-name">
            {props.name}
          </li>
          <li className="project-description">{props.description}</li>
        </ul>
      </div>
    </div>
    </a>
    </>
  );
}

export default Projects;
