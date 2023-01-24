import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const Item = ({id, title, price, thumbnail}) =>{
    return(
        <div className="App-card" >
            <picture>
                <h3>{title}</h3>
                <img src={thumbnail} alt={`Product`}/>
                <p>${price}</p>
            </picture>
        </div>
    );
}

export default Item;