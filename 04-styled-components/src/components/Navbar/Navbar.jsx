import React from "react";
import Button from "../Button/Button";
import {
  Nav,
  Logo,
  CenterEmoji,
  NavbarRight,
  CartInfo,
  ThemeToggle,
} from "./NavbarStyles";

export default function Navbar({ theme, toggleTheme, cartCount, clearCart }) {
  return (
    <Nav role="navigation" aria-label="Barra de navegação principal">
      <Logo>Game&apos;s Shop</Logo>

      <CenterEmoji aria-hidden="true">🎮</CenterEmoji>

      <NavbarRight>
        <CartInfo aria-label={`Carrinho com ${cartCount} itens`}>
          <span role="img" aria-hidden="true">
            🛒
          </span>{" "}
          ({cartCount})
          {cartCount > 0 && (
            <Button variant="outline" onClick={clearCart}>
              Limpar
            </Button>
          )}
        </CartInfo>

        <ThemeToggle
          onClick={toggleTheme}
          aria-label={`Mudar tema para ${
            theme === "light" ? "escuro" : "claro"
          }`}
          type="button"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </ThemeToggle>
      </NavbarRight>
    </Nav>
  );
}