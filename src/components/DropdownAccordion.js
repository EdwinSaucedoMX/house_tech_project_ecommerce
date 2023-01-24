import NavDropdown from 'react-bootstrap/NavDropdown';
import NavAccordion from './NavAccordion';

const DropdownAccordion = ({title, items}) => {
    
    return (
        <>
            <NavDropdown menuVariant='double' title={title}>
                <NavAccordion title="Mobile"/>
                <NavAccordion title="Computer"/>
                <NavAccordion title="Electrical Components"/>
                <NavAccordion title="Electronics"/>
                <NavAccordion title="Furniture"/>
                <NavAccordion title="Consumables"/>
            </NavDropdown>
        </>
    );
}

export default DropdownAccordion;