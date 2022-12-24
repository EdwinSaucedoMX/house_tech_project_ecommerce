import {BsFillBagFill} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return (
        <Button variant='transparent' className='cart-widget'>
            <BsFillBagFill role="button" className="nav-icon cart-icon"/>
            <h4 className="counter">0</h4>
        </Button>
            
    );
}

export default CartWidget;