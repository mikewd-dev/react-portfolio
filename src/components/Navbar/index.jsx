import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./Navbar.css"

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
            <Nav.Link className="nav-link" href="#skills">Skills</Nav.Link>
            <Nav.Link className="nav-link" href="#projects">Projects</Nav.Link>
            <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navigation;
