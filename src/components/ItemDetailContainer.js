//To check count and calculating real price of product

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Item from './Item';
import Counter from './Counter'

const ItemDetailContainer = () =>{

    
    
    let[product, setProduct] = useState([]);
    const [price, setPrice] = useState(0);
    //const[count, setCount] = useState(1);

    //const[calculated, setCalculated] = useState(price * count);

    let {id} = useParams();
    id = id.replace(/:/g, '');
    
    
    useEffect(() => {
        if(id){
            fetch(`https://api.mercadolibre.com//items?ids=${id}`)
            .then(response => response.json())
            .then(data => {
                let [info] = data;
                

                setProduct(info.body);
                setPrice(info.body.price);
            });
            //console.log(count);
        }
        }, [id])
    return(
        <div className='container-flex-center'>
            <Item {...product} calculatedPrice = {price}/>
            {//<Counter count= {count}/>
            }
            <Counter/>
        </div>
    )
}

export default ItemDetailContainer;