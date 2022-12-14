import '../App.css';
import Card from './Card';

function Carousel(params){
    return(
        <div className="App-container">
            <h1>Carousel</h1>
            <div className="App-carousel">
            <Card title="Card 1" img="https://via.placeholder.com/150" text="This is card 1"/>
            <Card title="Card 2" img="https://via.placeholder.com/150" text="This is card 2"/>
            <Card title="Card 3" img="https://via.placeholder.com/150" text="This is card 3"/>
            <Card title="Card 4" img="https://via.placeholder.com/150" text="This is card 4"/>
            </div>
        </div>
    );
}

export default Carousel;