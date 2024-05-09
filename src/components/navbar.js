// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavbarSw() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link  href="/films/">Films</Nav.Link>
          <Nav.Link href="/characters/">Characters</Nav.Link>
          <Nav.Link  href="/starships/">Starships</Nav.Link>
          <Nav.Link disabled >Planets</Nav.Link>
          <Nav.Link disabled >Vehicles</Nav.Link>
          <Nav.Link disabled >Species</Nav.Link>
          {/* Agrega más enlaces según sea necesario */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarSw;
