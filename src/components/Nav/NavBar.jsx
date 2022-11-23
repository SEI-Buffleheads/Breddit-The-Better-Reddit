import React from "react";
import {Navbar, Nav, NavDropdown, Form, Button} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {FaRegUserCircle} from "react-icons/fa";
import {AiOutlineDown} from "react-icons/ai";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {MdNotificationsNone} from "react-icons/md";
import {GrAdd} from "react-icons/gr";
import logo from "../../assets/logos/reddisc.png";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar({setShowChat}) {

  return (
    <Navbar bg="light" expand="sm" className="nav-container" sticky="top">
      <LinkContainer to="/" className="logo">
        <Navbar.Brand>
          <img src={logo} alt="that logo boiii" style={{height: 25}} />
        </Navbar.Brand>
      </LinkContainer>

      <Form className="d-flex nav-form">
        <Form.Control
          type="search"
          placeholder="Search"
          className="smaller-input"
          aria-label="Search"
          size="sm"
        />{" "}
        <Button variant="outline-secondary" size="sm" className="nav-form-btn">
          Search
        </Button>
      </Form>

      {/* <Navbar.Text>
        Signed in as: <a href="/user">Almost</a>
      </Navbar.Text> */}

      <Nav className="nav ms-auto">
        <div className="nav-icons-container">
          <HiOutlineChatAlt2
            onClick={setShowChat}
            size={20}
            className="nav-icon"
          />

          <MdNotificationsNone size={20} className="nav-icon" />
          <LinkContainer
            to="/post"
            style={{marginLeft: -5, marginRight: -5, marginTop: -3}}
          >
            <Nav.Link>
              <GrAdd
                size={18}
                className="nav-icon"
                style={{marginBottom: -8}}
              />
            </Nav.Link>
          </LinkContainer>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <LinkContainer to="/signup">
            <Nav.Link>SignUp</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
        <NavDropdown
          title={
            <div>
              <FaRegUserCircle className="nav-icon" size={20} />
              <AiOutlineDown className="nav-icon" size={20} />
            </div>
          }
          id="basic-nav-dropdown"
          size="sm"
          align="end"
          flip
        >
          <NavDropdown.Item as="button" className="dropdown-text">
            Dark Mode
          </NavDropdown.Item>
          <NavDropdown.Item as="button" className="dropdown-text">
            Settings
          </NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item as="button">
            {" "}
            <LinkContainer to="/login" className="dropdown-text">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>

          <NavDropdown.Item as="button" className="dropdown-text">
            {" "}
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
