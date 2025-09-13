import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import products from "./data/products";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [cartCount, setCartCount] = useState(0);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const addToCart = () => {
    setLoadingButton(true);
    setTimeout(() => {
      setCartCount((c) => c + 1);
      setLoadingButton(false);
    }, 250);
  };

  const clearCart = () => setCartCount(0);

  return (
    <div
      className="
        font-sans antialiased
        bg-white text-textPrimary
        dark:bg-bgDark dark:text-textLight
        transition-colors duration-300 ease-in-out
        min-h-screen w-full pt-[60px]
      "
    >
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartCount={cartCount}
        clearCart={clearCart}
      />

      <main className="max-w-[1200px] mx-auto p-4 pt-[60px] relative z-[1]">
        <section
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          aria-label="Lista de produtos"
        >
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
    </div>
  );
}
