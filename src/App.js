import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import NewArrivalsPage from '../src/pages/NewArrivalsPage';
import HikingPage from './pages/HikingPage';
import CampingPage from './pages/CampingPage';
import ShoppingCart from './pages/ShoppingCart';
import newData from './data/newData';
import hikingData from './data/hikingData';
import campingData from './data/campingData';
import { useState } from 'react';

const App = () => {
  const { newProducts } = newData;
  const { hikingProducts } = hikingData;
  const { campingProducts } = campingData
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar className='nav-bar sticky-top' cartItems={cartItems} />
        <Routes>
          <Route exact path="/shopping-cart-react" element={<Home />} />
          <Route path="/shopping-cart-react/products/newarrivals" element={<NewArrivalsPage newProducts={newProducts} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/shopping-cart-react/products/hiking" element={<HikingPage hikingProducts={hikingProducts} onAdd={onAdd} onRemove={onRemove}/>} />
          <Route path="/shopping-cart-react/products/camping" element={<CampingPage campingProducts={campingProducts} onAdd={onAdd} onRemove={onRemove}/>} />
          <Route path="/shopping-cart-react/cart" element={<ShoppingCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>  
    </BrowserRouter>
    </div>
  );
}

export default App;
