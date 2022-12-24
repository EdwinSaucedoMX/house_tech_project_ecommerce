import NavDropdown from 'react-bootstrap/NavDropdown';
import AccordionNav from './AccordionNav';

function NavDoubleDropdown({title, items}) {
    return (
        <div>
            <NavDropdown menuVariant='double' title={title}>
                <AccordionNav title="Mobile"/>
                <AccordionNav title="Computer"/>
                <AccordionNav title="Electrical Components"/>
                <AccordionNav title="Electronics"/>
                <AccordionNav title="Furniture"/>
                <AccordionNav title="Consumables"/>
            </NavDropdown>
        </div>
    );
}

export default NavDoubleDropdown;