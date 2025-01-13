import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3" id="products">
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
