import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./App.css";

const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.toggle("dark", savedTheme === "dark");

export default function App() {
  const [theme, setTheme] = useState(savedTheme);
  const [cartCount, setCartCount] = useState(0);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const addToCart = () => {
    setLoadingButton(true);
    setTimeout(() => {
      setCartCount((count) => count + 1);
      setLoadingButton(false);
    }, 250);
  };

  const clearCart = () => setCartCount(0);

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartCount={cartCount}
        clearCart={clearCart}
      />
      <main>
        <section className="product-list" aria-label="Lista de produtos">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              loadingButton={loadingButton}
            />
          ))}
        </section>
      </main>
    </>
  );
}