import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text text-primary">₹{product.price}</p>
        <button
          className="btn btn-success"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
