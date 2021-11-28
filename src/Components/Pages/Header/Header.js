import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../image/icon.png'

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="justify-content-end"  id="basic-navbar-nav">

          <Nav className="ml-auto ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about us">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact us">
              Contact Us
            </Nav.Link>
            {/* { user.email &&
              <span className="text-dark"> Hello, {user.displayName} </span>
            }
                
            {user?.email ? (
              <Button onClick={logOut}>log Out</Button>
            ) : (
              <Nav.Link as={Link} to="/LogIn">
                LogIn
              </Nav.Link>
            )} */}
          </Nav>
    </Navbar.Collapse>
        </Container>
      </Navbar>      
        </>                                                                     
    );
};

export default Header;




