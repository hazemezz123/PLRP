import React, { createContext, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles/App.css";

// Create Context
export const CartContext = createContext();

const App = () => {
  // State for shopping cart
  const [cart, setCart] = useState([]);

  // Cart functions
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Context value object
  const cartContextValue = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <div className="app">
        <header className="header">
          <h1>Simple Shop</h1>
          <Cart />
        </header>
        <ProductList />
      </div>
    </CartContext.Provider>
  );
};

export default App;
