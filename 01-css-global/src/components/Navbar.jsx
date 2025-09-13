import React from "react";

export default function Navbar({ theme, toggleTheme, cartCount, clearCart }) {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="Barra de navegação principal"
    >
      <div className="logo" tabIndex={0}>
        Game's Shop
      </div>

      <div className="center-emoji" aria-hidden="true">
        🎮
      </div>

      <div className="navbar-right">
        <div
          className="cart-info"
          aria-label={`Carrinho com ${cartCount} itens`}
          tabIndex={0}
        >
          <span role="img" aria-hidden="true">
            {" "}
            🛒{" "}
          </span>{" "}
          ({cartCount})
          {cartCount > 0 && (
            <button
              onClick={clearCart}
              aria-label="Limpar carrinho"
              className="btn btn-outline"
              type="button"
            >
              Limpar
            </button>
          )}
        </div>

        <button
          onClick={toggleTheme}
          aria-label={`Mudar tema para ${
            theme === "light" ? "escuro" : "claro"
          }`}
          className="btn-theme-toggle"
          type="button"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
