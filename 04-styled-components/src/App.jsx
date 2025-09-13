import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import products from "./data/products";
import { GlobalStyle, lightTheme, darkTheme, ProductList } from "./AppStyles";

const savedTheme = (() => {
  try {
    return localStorage.getItem("theme") || "light";
  } catch {
    return "light";
  }
})();

export default function App() {
  const [theme, setTheme] = useState(savedTheme);
  const [cartCount, setCartCount] = useState(0);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* noop */
    }
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
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartCount={cartCount}
        clearCart={clearCart}
      />
      <main>
        <ProductList aria-label="Lista de produtos">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              loadingButton={loadingButton}
            />
          ))}
        </ProductList>
      </main>
    </ThemeProvider>
  );
}