import {useEffect, useRef} from "react";
import {useNavigate, Link} from "react-router-dom";
import {signOut} from "../../services/user.js";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useSearchContext} from "../../hooks/useSearchContext";
import {Navbar, Nav, NavDropdown, Form, Button} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {RiAccountPinBoxLine} from "react-icons/ri";
import {AiOutlineDown, AiOutlineLogout} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {MdNotificationsNone} from "react-icons/md";
import {BiMoon, BiSun} from "react-icons/bi";
import {GrAdd} from "react-icons/gr";
import logo from "../../assets/logos/brand_logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./Nav.css";

function NavBar({setShowChat, expanded, setExpanded, theme, setTheme}) {
  const {dispatch} = useAuthContext();
  const queryRef = useRef();
  const {searchDispatch} = useSearchContext();
  const {user} = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchDispatch({
      type: "SEARCH",
      payload: queryRef.current.value.toLowerCase(),
    });
    queryRef.current.value = "";
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const SignOut = () => {
    signOut();
    dispatch({type: "LOGOUT"});
    navigate("/", {replace: true});
  };

  return (
    <Navbar
      expand="sm"
      className={`nav-container nav-container-${theme}`}
      expanded={expanded}
      fixed="top"
    >
      <LinkContainer to="/" className="logo">
        <Navbar.Brand
          onClick={() =>
            setTimeout(() => {
              setExpanded(false);
            }, 50)
          }
        >
          <img src={logo} alt="that logo boiii" style={{height: 55}} />
        </Navbar.Brand>
      </LinkContainer>

      {user && (
        <Navbar.Text
          onClick={() =>
            setTimeout(() => {
              setExpanded(false);
            }, 50)
          }
        >
          <span className={`signed-in-text signed-in-text-${theme}`}>
            Signed in as:{" "}
          </span>
          <Link to="/profile" className="logged-in-username">
            {user.username}
          </Link>
        </Navbar.Text>
      )}

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav ms-auto">
          <Form className="d-flex nav-form" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="smaller-input"
              aria-label="Search"
              size="sm"
              ref={queryRef}
            />{" "}
            <Button variant="outline-secondary" size="sm" type="submit">
              Search
            </Button>
          </Form>

          <div
            className="nav-icons-container"
            onClick={() =>
              setTimeout(() => {
                setExpanded(false);
              }, 50)
            }
          >
            <HiOutlineChatAlt2
              onClick={setShowChat}
              size={20}
              className="nav-icon"
            />

            <MdNotificationsNone
              size={20}
              className="nav-icon"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 50)
              }
            />

            <LinkContainer
              to="/create-post"
              style={{marginLeft: -5, marginRight: -5, marginTop: -3}}
            >
              <Nav.Link
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 50)
                }
              >
                <GrAdd
                  size={18}
                  className="nav-icon"
                  style={{marginBottom: -8}}
                />
              </Nav.Link>
            </LinkContainer>
          </div>

          {!user && (
            <LinkContainer to="/signup">
              <Nav.Link
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 50)
                }
              >
                SignUp
              </Nav.Link>
            </LinkContainer>
          )}

          {!user && (
            <LinkContainer to="/login">
              <Nav.Link
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 50)
                }
              >
                Login
              </Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="nav-toggler"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />

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
        className={`nav-dropdown`}
        onClick={() =>
          setTimeout(() => {
            setExpanded(false);
          }, 50)
        }
      >
        {user && (
          <NavDropdown.Item as="button" className={`dropdown-text`}>
            {" "}
            <LinkContainer to="/profile" className="dropdown-text">
              <Nav.Link
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 50)
                }
              >
                <RiAccountPinBoxLine size={22} className="nav-icon" />
                Profile
              </Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>
        )}

        {user && <NavDropdown.Divider />}

        <NavDropdown.Item
          as="button"
          className="dropdown-text"
          onClick={() =>
            setTimeout(() => {
              setExpanded(false);
            }, 50)
          }
        >
          <div onClick={toggleTheme}>
            <BiSun size={20} />
            <BiMoon size={20} /> Toggle Theme
          </div>
        </NavDropdown.Item>

        <NavDropdown.Item
          as="button"
          className="dropdown-text"
          onClick={() =>
            setTimeout(() => {
              setExpanded(false);
            }, 50)
          }
        >
          Settings
        </NavDropdown.Item>

        {!user && <NavDropdown.Divider />}

        {!user && (
          <NavDropdown.Item as="button">
            {" "}
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>
        )}

        {!user && (
          <NavDropdown.Item as="button" className="dropdown-text">
            {" "}
            <LinkContainer to="/signup">
              <Nav.Link
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 50)
                }
              >
                Signup
              </Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>
        )}

        {user && <NavDropdown.Divider />}

        {user && (
          <NavDropdown.Item as="button">
            {" "}
            <LinkContainer to="/" className="dropdown-text">
              <Nav.Link onClick={SignOut}>
                <AiOutlineLogout size={20} className="nav-icon" />
                Logout
              </Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>
        )}
      </NavDropdown>
    </Navbar>
  );
}

export default NavBar;
