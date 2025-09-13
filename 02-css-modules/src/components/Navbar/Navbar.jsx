import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar({ theme, toggleTheme, cartCount, clearCart }) {
  return (
    <nav
      className={`${styles.navbar} ${theme === "dark" ? styles.dark : ""}`}
      role="navigation"
      aria-label="Barra de navegação principal"
    >
      <div className={styles.logo} tabIndex={0}>
        Game's Shop
      </div>

      <div className={styles.centerEmoji} aria-hidden="true">
        🎮
      </div>

      <div className={styles.navbarRight}>
        <div
          className={styles.cartInfo}
          aria-label={`Carrinho com ${cartCount} itens`}
          tabIndex={0}
        >
          <span role="img" aria-hidden="true">
            🛒
          </span>{" "}
          ({cartCount})
          {cartCount > 0 && (
            <Button
              onClick={clearCart}
              aria-label="Limpar carrinho"
              variant="outline"
            >
              Limpar
            </Button>
          )}
        </div>

        <Button
          onClick={toggleTheme}
          aria-label={`Mudar tema para ${
            theme === "light" ? "escuro" : "claro"
          }`}
          className={styles.btnThemeToggle}
          variant="ghost"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </Button>
      </div>
    </nav>
  );
}
