import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  let activeStyle = {
    color: "#fff",
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">Santosh Nandiyawar</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="me-auto">
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
