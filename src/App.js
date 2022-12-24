import './App.scss';
import ItemListContainer from './components/ItemListContainer';
import CustomNavbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <CustomNavbar first="Home" second="About" third="Contact"/>
      <header className="App-header">
      </header>
      <ItemListContainer title={"Item List"}/>
    </div>
  );
}

export default App;
