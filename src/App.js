import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CustomNavbar from './components/Navbar';
import CategoryListContainer from './components/CategoryListContainer';


function App() {
  return(
    <div className="App">
      <BrowserRouter >
        <CustomNavbar first="Home" second="About" third="Contact"/>

        <Routes>
          <Route path='/house_tech_project_ecommerce/' element={<ItemListContainer title="List"/>}/>
          <Route path='/house_tech_project_ecommerce/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/house_tech_project_ecommerce/categories/:id' element={<CategoryListContainer/>}/>
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
