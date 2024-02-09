import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css";

function Contact() {
  return (
<Container fluid>
    <div id="contact" className="Contact">
<h2>michaeldawson</h2>
      <div className="social">

        <a className = "links" href="https://github.com/mikewd-dev">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a className="links"
          href="http://www.linkedin.com/in/mikewdawson">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
    </Container>
  );
}

export default Contact;
