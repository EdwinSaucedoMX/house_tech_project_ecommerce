
import { useEffect, useState } from 'react';

import ItemList from './ItemList';



/* const imgDefault = "https://via.placeholder.com/150"; */

const ItemListContainer = ({title}) =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLM/search?q=computadoras')
        .then(response => response.json())
        .then(data => {
            setProducts(data.results)});
            setLoading(false);
   
   
        
        }, [])
    
    if(loading){
        return <h1>Cargando...</h1>
    }
    else{
        return (
            <>
                <h1>{title}</h1>
                
                <ItemList title={"Item List"} products={products}/>
            </>
        );
    }
    
}
export default ItemListContainer;