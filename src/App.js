import './App.css';
import Navbar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import CartCustomProvider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
    <CartCustomProvider>
    <Navbar/>
    <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/product/:productId" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartCustomProvider>
    </BrowserRouter>
  );
}

export default App;
