import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import logo1 from "../images/logo1.png";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./navbar1.css";
const Navbar1 = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" fixed="top" className="mar">
        <Container fluid>
          <Navbar.Brand href="#" className="rad1">
            <div className="rad">
              <img
                src={logo1}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll ">
            <Nav
              className="me-auto my-2 my-lg-0 font"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">About</Nav.Link>
            </Nav>
            <Form className="d-flex mar">
              <Button
                variant="outline-dark"
                className="rounded-pill text"
                size="lg"
              >
                create a group
              </Button>
            </Form>
            <Nav className="font mar">
              <Nav.Link href="#action1">Get in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbar1;
