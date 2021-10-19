import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home#home">
            <img
              src="/favicon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />{" "}
            Sheba Hospital
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#contact">
              Contact
            </Nav.Link>
            {user?.email || user?.displayName ? (
              <Button className="me-2" onClick={logOut}>
                Logout
              </Button>
            ) : (
              <Nav.Link
                as={Link}
                className=" text-white fw-bold rounded-3 me-2"
                to="/signup"
              >
                SignUp
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as:{" "}
              <span className="text-white fw-bold">
                {user.displayName ? user.displayName : user.email}
              </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
