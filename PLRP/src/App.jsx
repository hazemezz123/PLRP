import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComponentA from "./components/ComponentA.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { ProductProvider } from "./ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <div>
          <ComponentA />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
