import '../App.css';

function Card(params){
    return(
        <div className="App-card">
            <picture>
                <h2>{params.title}</h2>
                <img src={params.img} alt={params.title}/>
                <p>{params.text}</p>
            </picture>
        </div>
    );
}

export default Card;