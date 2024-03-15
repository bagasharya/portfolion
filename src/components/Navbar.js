import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand className='text-white' href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-white' href="/Home">Home</Nav.Link>
            <Nav.Link className='text-white' href="/About">About</Nav.Link>
            <Nav.Link className='text-white' href="/Project">Project</Nav.Link>
            <Nav.Link className='text-white' href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar