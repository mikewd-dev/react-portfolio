import React from "react";

import "./Skills.css";

function Skills(props) {
  return (

<>

<div id="skills" className="skillscard">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
{/* <p>{props.name}</p> */}
      </div>
      <div className="content">

        <ul>
          <li className="skill-name">
            {props.skill}
          </li>

        </ul>
      </div>
    </div>
</>
  );
}

export default Skills;
