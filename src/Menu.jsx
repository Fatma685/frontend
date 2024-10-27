import React from 'react'

import {Nav, Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';

import {Link } from 'react-router-dom'
function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand >Gestion Commerciale</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/categories">Catégories</Nav.Link>
            <Nav.Link as={Link} to="/scategories">Sous Catégories</Nav.Link>
            <Nav.Link as={Link} to="/articles">Liste des Articles</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;