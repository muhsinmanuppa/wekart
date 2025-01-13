import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import productsData from "./data/products.json";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Router>
      <Header cartCount={cart.length} />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  categories={[...new Set(products.map((p) => p.category))]}
                  onCategorySelect={handleCategorySelect}
                  onSearch={handleSearch}
                />
                <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
              </>
            }
          />
          <Route path="/cart" element={<Cart cartItems={cart} setCart={setCart} />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
