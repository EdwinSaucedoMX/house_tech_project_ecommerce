import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

const Dropdown = ({title}) => {
    
    return (
        <NavDropdown id="basic-nav-dropdown" title={title}>
                <Link key = {'MLM1039'} to={`/house_tech_project_ecommerce/categories/:MLM1039`}><li className='dropdown-item' >Camaras</li></Link>
                <Link key = {'MLM1648'} to={`/house_tech_project_ecommerce/categories/:MLM1648`}><li className='dropdown-item' >Computadoras</li></Link>
                <Link key = {'MLM1051'} to={`/house_tech_project_ecommerce/categories/:MLM1051`}><li className='dropdown-item' >Celulares</li></Link>
                <Link key = {'MLM1144'} to={`/house_tech_project_ecommerce/categories/:MLM1144`}><li className='dropdown-item' >Videojuegos</li></Link>
        </NavDropdown>
    );
}

export default Dropdown;