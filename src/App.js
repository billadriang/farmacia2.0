import './App.css';
import Navbar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/product/:productId" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
