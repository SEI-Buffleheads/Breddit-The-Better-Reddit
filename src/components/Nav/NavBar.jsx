import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {FaRegUserCircle} from "react-icons/fa";
import {AiOutlineDown} from "react-icons/ai";
import logo from "../../assets/logos/reddisc.png";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="nav-container">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={logo}
            alt="that logo boiii"
            style={{height: 25}}
          />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/signup">
            <Nav.Link>SignUp</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/about" className="nav-about">
            <Nav.Link>
              <FaRegUserCircle />
              <AiOutlineDown />
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
