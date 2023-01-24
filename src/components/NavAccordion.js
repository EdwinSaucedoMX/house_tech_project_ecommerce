import NavDropdown from 'react-bootstrap/NavDropdown';
import Accordion from 'react-bootstrap/Accordion';

const NavAccordion = ({title, items}) => {

    return(
        <Accordion bsPrefix='accordion accordion-nav' defaultActiveKey="0">
            <Accordion.Item>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default NavAccordion;