import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const Item = ({id, title, price, thumbnail}) =>{
    return(
        <Link className="App-card" role={'button'} to={`/detail/:${id}`} >
            <picture>
                <h3>{title}</h3>
                <img src={thumbnail} alt={`Product`}/>
                <p>${price}</p>
            </picture>
        </Link>
    );
}

export default Item;