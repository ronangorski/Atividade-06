import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import products from "./data/products";
import styles from "./App.module.css";

const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.toggle(styles.dark, savedTheme === "dark");

export default function App() {
  const [theme, setTheme] = useState(savedTheme);
  const [cartCount, setCartCount] = useState(0);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(styles.dark, theme === "dark");
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
      <main className={styles.main}>
        <section className={styles.productList} aria-label="Lista de produtos">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              loadingButton={loadingButton}
              theme={theme}
            />
          ))}
        </section>
      </main>
    </>
  );
}