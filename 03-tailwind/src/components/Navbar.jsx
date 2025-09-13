import React from "react";
import Button from "./Button";

export default function Navbar({ theme, toggleTheme, cartCount, clearCart }) {
  return (
    <nav
      className="
        flex justify-center items-center
        fixed top-0 left-0 right-0
        h-[60px] px-8
        shadow-[0_2px_4px_rgba(0,0,0,0.1)]
        dark:shadow-[0_2px_4px_rgba(255,255,255,0.1)]
        z-[100]
        bg-white dark:bg-[#121212]
        transition-all duration-300
        select-none
      "
      role="navigation"
      aria-label="Barra de navegação principal"
    >
      <div className="absolute left-8 font-bold text-2xl" tabIndex={0}>
        Game's Shop
      </div>

          <div
        className="
          flex items-center justify-center
          w-[52px] h-[51px]
          border-2 border-black/50
          rounded-full bg-[#007bff]
          text-[1.8rem]
        "
        aria-hidden="true"
      >
        🎮
      </div>


      <div className="absolute right-8 flex items-center gap-6 text-base">
        {/* Carrinho */}
        <div
          className="flex items-center gap-2 text-[1.2rem]"
          aria-label={`Carrinho com ${cartCount} itens`}
          tabIndex={0}
        >
          <span role="img" aria-hidden="true">🛒</span> ({cartCount})
          {cartCount > 0 && (
            <Button
              variant="outline"
              onClick={clearCart}
              className="py-[5px]"
            >
              Limpar
            </Button>
          )}
        </div>

        <button
          onClick={toggleTheme}
          type="button"
          className="
            cursor-pointer text-[1.6rem]
            bg-transparent border-0
            p-[0.5rem_0.5rem] rounded
            transition-all duration-200 ease-in-out
            hover:bg-[#007bff] hover:text-white hover:scale-110 hover:shadow-[0_0_6px_#007bff]
            focus:bg-[#007bff] focus:text-white focus:shadow-[0_0_6px_#007bff]
            focus:outline-none
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#007bff] focus-visible:outline-offset-2
          "
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
