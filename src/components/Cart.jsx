import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCart }) => {
  // Function to increase the quantity of a product
  const handleIncreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease the quantity of a product
  const handleDecreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };

  // Function to remove a product from the cart
  const handleRemoveProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      <Link to="/" className="btn btn-secondary mb-3">
        Back to Home
      </Link>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.name}</h5>
                    <p>Price: ₹{item.price}</p>
                    <p>
                      Quantity:{" "}
                      <span className="badge bg-primary">{item.quantity}</span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveProduct(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="mt-4">Total: ₹{total}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
