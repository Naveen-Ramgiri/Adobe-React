import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing/WomenProductListing";
import "./App.css";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Header from '../src/components/Header/Header';
import Footer from "./components/Footer/Footer";
import Accessories from "./components/Accessories/Accessories";
import MenProductListings from './components/MenProductListings/MenProductListings';
import AccessoriesListings from './components/AccessoriesListings/AccessoriesListings';
import JewelleryListings from './components/JewelleryListings/JewelleryListings';
import Cart from './components/Cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
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
    const exist = cartItems.find((x) => x.id === product.id);
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
      <Router>
        <Header countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails onAdd={onAdd} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/men" element={<MenProductListings />} />
          <Route path="/jewellery" element={<JewelleryListings />} />
          <Route path="/accessories" element={<AccessoriesListings />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
