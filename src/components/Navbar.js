import '../App.css';

function Navbar(params){
    return(
        <nav className="App-nav">
            <ul>
                <li><a href="http://localhost:3000/">{params.first}</a></li>
                <li><a href="http://localhost:3000/">{params.second}</a></li>
                <li><a href="http://localhost:3000/">{params.third}</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;