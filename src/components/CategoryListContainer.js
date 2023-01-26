import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Item from './Item';


//Camaras MLM1039
//Celulares  MLM1051
//Computadoras  MLM1648
//Videojuegos MLM1144
const CategoryListContainer = () =>{
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLM/search?category=MLM1039')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProducts(data.results)});


            
        
        }, []);
    
    return(
        <div className='container-flex-center'>
            <h1>{category}</h1> 
            {products.map((product) => <Item {...product} key={product.key} />)}
            

        </div>

    )
}

export default CategoryListContainer;
