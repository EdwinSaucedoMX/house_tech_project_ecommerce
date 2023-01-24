import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CustomNavbar from './components/Navbar';


function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <CustomNavbar first="Home" second="About" third="Contact"/>

        <Routes>
          <Route path='/' element={<ItemListContainer title="List"/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer title="Detail"/>}/>
        </Routes>
        {/* <header className="App-header">
          <h1>Welcome to Housetech Shop</h1>
          <ItemDetailContainer title="Item List"/>
        </header> */}
        
        
      
      </BrowserRouter>
    </div>
  )
}

export default App;
