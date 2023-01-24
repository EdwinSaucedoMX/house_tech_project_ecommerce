import Item from './Item';
import ItemDetailContainer from './ItemDetailContainer';
import { Link, Route, Routes } from 'react-router-dom'
const ItemList = ({products}) =>{
    console.log(products);
    return(
        <div className="App-container">
            <ul className="item-list-container">
                {products.map((product) => <Link to={`detail/:${product.id}`}><Item key = {product.id} thumbnail={product.thumbnail} title={product.title} price={product.price}></Item></Link>)}
            </ul>

            <Routes>
                <Route path='detail/:id' element={<ItemDetailContainer/>}/>
            </Routes>

        </div>
        
    );
}


export default ItemList;