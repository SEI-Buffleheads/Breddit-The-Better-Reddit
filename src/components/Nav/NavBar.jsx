import React from "react";
import {Navbar, Nav, NavDropdown, Form, Button, Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {FaRegUserCircle} from "react-icons/fa";
import {AiOutlineDown} from "react-icons/ai";
import {HiOutlineChatAlt2} from "react-icons/hi";
import logo from "../../assets/logos/reddisc.png";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar({setToggleChat}) {
  // pass toggle to chat icon onClick
  return (
    <Navbar bg="light" expand="md" className="nav-container" sticky="top">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={logo} alt="that logo boiii" style={{height: 25}} />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Navbar.Text>
          Signed in as: <a href="/login">Almost</a>
        </Navbar.Text> */}

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="smaller-input"
            aria-label="Search"
            size="sm"
          />
          {" "}
          <Button variant="outline-secondary" size="sm">Search</Button>
        </Form>
      </Navbar.Collapse>

      <HiOutlineChatAlt2 className="nav-chat-icon ms-auto" onClick={setToggleChat} />

      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Container fluid> */}
        <Nav className="ms-auto">
          <LinkContainer to="/signup">
            <Nav.Link>SignUp</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>

          <NavDropdown
            title={
              <div>
                <FaRegUserCircle className="nav-icon" />
                <AiOutlineDown className="nav-icon" />
              </div>
            }
            id="basic-nav-dropdown"
            size="sm"
            align={{lg: "start"}}
            className="dropDownMenu dropdown-menu-end"
          >
            <NavDropdown.Item as="button">Dark Mode</NavDropdown.Item>
            <NavDropdown.Item as="button">Settings</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item as="button">
              {" "}
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item as="button">
              {" "}
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* </Container> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
