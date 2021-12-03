import React from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap'

const Navigation = () => {
    return ( 
        <Navbar bg="dark" variant="dark" expand="md" className="sticky-top">
          <Container>
            <Navbar.Brand href="#home" className="me-5">Dog Love Shelter</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/adoption" disabled>Adoption</Nav.Link>
              <Nav.Link href="/donation" disabled>Donation</Nav.Link>
              <Nav.Link href="/services" disabled>Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     );
}
 
export default Navigation;