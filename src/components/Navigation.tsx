// Lib
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation: React.FC = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Minä</Nav.Link>
            <Nav.Link as={Link} to="/skills">Taidot</Nav.Link>
            <Nav.Link as={Link} to="/education">Koulutus</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projektit</Nav.Link>
            <Nav.Link as={Link} to="/contact">Yhteystiedot</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
