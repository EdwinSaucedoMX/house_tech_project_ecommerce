import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar first="Home" second="About" third="Contact"/>
      <header className="App-header">
        <Carousel/>
      </header>
    </div>
  );
}

export default App;
