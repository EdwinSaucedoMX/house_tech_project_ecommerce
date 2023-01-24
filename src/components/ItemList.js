import Item from './Item';
const ItemList = ({products}) =>{
    console.log(products);
    return(
        <div className="App-container">
            <ul className="item-list-container">
                {products.map((product) => <Item key = {product.id} thumbnail={product.thumbnail} title={product.title} price={product.price}></Item>)}
            </ul>
        </div>
    );
}

export default ItemList;