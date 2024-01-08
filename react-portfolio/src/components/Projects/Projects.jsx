import './Projects.css'

function Projects(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
    <ul>
        <li>Name: {props.name}</li>
        <li>Description: {props.description}</li>
    </ul>
      </div>
    </div>

  );
}

export default Projects;
