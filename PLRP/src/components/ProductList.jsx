import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../ProductContext";

const ProductList = () => {
  const { products, loading, fetchProducts } = useProduct();

  // Fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
