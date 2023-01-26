import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Item from './Item';
import Counter from './Counter'

const ItemDetailContainer = () =>{

    
    
    let[product, setProduct] = useState([]);
    let {id} = useParams();
    id = id.replace(/:/g, '');
    
    
    useEffect(() => {
        if(id){
            fetch(`https://api.mercadolibre.com//items?ids=${id}`)
            .then(response => response.json())
            .then(data => {
                let [info] = data;
                

                setProduct(info.body);
            });
        }
        }, [id])
    return(
        <div className='container-flex-center'>
            <Item {...product}/>
            <Counter />
        </div>
    )
}

export default ItemDetailContainer;