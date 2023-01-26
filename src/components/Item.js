
const Item = ({id, title, price, thumbnail, calculatedPrice}) =>{

    if(calculatedPrice){
        price = calculatedPrice;
    }

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