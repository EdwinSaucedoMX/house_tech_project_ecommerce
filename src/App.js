import logo from './logo.svg';
import './App.css';
import Btn from './components/Button';
import Carousel from './components/Carousel';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav first="Home" second="About" third="Contact"/>
      <header className="App-header">
        <Carousel/>
        <img src={logo} className="App-logo" alt="logo" />
        <Btn text="Click Here!"/>
        <Btn color="purple" text="Hello World"/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
