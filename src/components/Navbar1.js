import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import logo from '../images/logo.jpg'
import { Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import './navbar1.css'
 const Navbar1 = () => {
  return (
      <>
    <Navbar bg="white" expand="lg" fixed='top'>
    <Container fluid>
      <Navbar.Brand href="#">
      <img
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
          
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll ">
        <Nav
          className="me-auto my-2 my-lg-0 font"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">About</Nav.Link>
        </Nav>
        <Form className="d-flex mar">
          <Button variant="outline-dark" className="rounded-pill text" size="lg">create a group</Button>
        </Form>
        <Nav className='font mar'>
        <Nav.Link href="#action1">Get in</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar></>
  )
}
export default Navbar1;
