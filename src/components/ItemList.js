import Item from './Item';
import { Link } from 'react-router-dom'
const ItemList = ({products}) =>{
    //console.log(products);
    return(
        <div className="App-container">
            <ul className="item-list-container">
                {products.map((product) => <Link key = {product.id} to={`detail/:${product.id}`} ><Item thumbnail={product.thumbnail} title={product.title} price={product.price} /> </Link>)}
            </ul>
        </div>
    );
}


export default ItemList;