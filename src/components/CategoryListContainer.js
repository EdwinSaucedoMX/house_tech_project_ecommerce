import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import Item from './Item';


//Camaras MLM1039
//Celulares  MLM1051
//Computadoras  MLM1648
//Videojuegos MLM1144
const CategoryListContainer = () =>{
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    let {id} = useParams();
    id = id.replace(/:/g, '');
    
    useEffect(() => {
        setLoading(true);
        fetch(`https://api.mercadolibre.com/sites/MLM/search?category=${id}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            setProducts(data.results)}).finally(() => setLoading(false));
        }, [id]);
    
    if(loading){
        return <h1>Cargando...</h1>
    }
    else if(!loading){
        return(
            <div className='container-flex-center' key={id}>
                <h1>Products</h1> 
                {products.map((product) => <Link key={product.key} to={`/house_tech_project_ecommerce/detail/:${product.id}`}><Item {...product} /></Link>)}
            </div>
        )
    }
}

export default CategoryListContainer;
