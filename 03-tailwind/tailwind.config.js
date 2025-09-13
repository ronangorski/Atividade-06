/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#007bff",       // cor principal (botões, tags, foco)
        brandDark: "#0056b3",   // variação mais escura se precisar
        textPrimary: "#222",    // cor do texto no tema claro
        textLight: "#eee",      // cor do texto no tema escuro
        bgDark: "#121212",      // cor de fundo do tema escuro
      },
      boxShadow: {
        brand: "0 4px 10px #007bff", // sombra para hover
      },
    },
  },
  plugins: [],
};