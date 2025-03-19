import React, { useContext } from "react";
import { CartContext } from "../App";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  // Sample products data
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Headphones", price: 99 },
    { id: 3, name: "Mouse", price: 29 },
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
