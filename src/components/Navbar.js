import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom'; 

import DropdownAccordion from './DropdownAccordion';
import CartWidget from './CartWidget';
//import ReactLogo from '../img/logo.svg'; // ! This cause an error, you have to change svg properties to camelCase on the svg file
import Logo from '../img/logo.svg'; // ... This is the correct way to import svg files if you want tu use as a variable
/* import {ReactComponent as Logo}| from '../img/logo.svg'; */ // * This is the correct way to import svg files if you want tu use as a component

const CustomNavbar = () =>{
  

  

  
  return (
      <Navbar 
      sticky="top"
      bg="light" 
      expand="lg"
      bsPrefix='navbar'
      >
      <Container fluid>
          <Link to='/'>
            <Navbar.Brand role="button"><img  // ... For case 2, for case 1 you have to use <img />
              alt="Logo"
              width="30"
              height="30"
              src={Logo} // ... For case 1
              className="d-inline-block align-top"
            />{' '}HouseTech</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav 
            
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight : '100px'}}
            navbarScroll>
              <Nav.Link href="./home">Home</Nav.Link>
              <Nav.Link href="./link">Link</Nav.Link>
              <DropdownAccordion title="Categories"/>
            </Nav>
            <CartWidget bsPrefix="cart-widget"/>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                
              />
              <Button variant="outline-dark" disabled>Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
      </Navbar>
  );
}

export default CustomNavbar;