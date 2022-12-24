import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavDoubleDropdown from './NavDoubleDropdown';

function Navbar_() {
    return (
        <Navbar 
        sticky="top"
        bg="light" 
        expand="lg"
        bsPrefix='navbar'
        >
        <Container fluid>
            <Navbar.Brand href="#home"><img
              alt="Logo"
              src="https://static.vecteezy.com/system/resources/previews/010/160/674/original/coffee-icon-sign-symbol-design-free-png.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}HouseTech</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav 
            
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight : '100px'}}
            navbarScroll>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDoubleDropdown title="Categories"/>
            </Nav>
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

export default Navbar_;