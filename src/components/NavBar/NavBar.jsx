import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import { faCog, faHome } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import icon from "../../images/icon.png";

function NavBar(props) {
  return (
    <Navbar variant="dark">
      <Container>
        {/* brand */}
        <Navbar.Brand as={NavLink} to="/">
          {/* brand icon */}
          <img src={icon} width="30" height="30" alt="brand icon" /> Local
          Streamer
        </Navbar.Brand>

        {/* toggle button */}
        <Navbar.Toggle aria-controls="main-nav" />

        {/* nav items */}
        <Navbar.Collapse id="main-nav">
          <Nav className="ml-auto">
            {/* home nav */}
            <Nav.Link as={NavLink} to="/home">
              <FontAwesomeIcon icon={faHome} />
              &nbsp; Home
            </Nav.Link>
            {/* home nav */}
            <Nav.Link as={NavLink} to="/settings">
              <FontAwesomeIcon icon={faCog} />
              &nbsp; Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(NavBar);
