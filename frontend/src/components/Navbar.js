import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthService } from "../services/AuthServices";

const NavbarHeader = () => {
  const currentUser = AuthService.getCurrentUser();
  const history = useHistory();

  const logOut = () => {
    AuthService.logout();
    history.push("/login");
    window.location.reload();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Testing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {currentUser ? (
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Nav.Link>{currentUser.nama}</Nav.Link>
              <Nav.Link onClick={() => logOut()}>Log Out</Nav.Link>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
