# 🛒 Tela de Produtos — 4 Abordagens de Estilização

Este repositório contém a implementação da mesma tela em quatro versões diferentes, usando técnicas de estilização distintas conforme solicitado
no exercício.

## 📂 Estrutura de Pastas

    01-css-global/
    02-css-modules/
    03-tailwind/
    04-styled-components/

---

## 🚀 Pré-requisitos

Certifique-se de ter **Node.js (\>= 18)** instalado.

## 🖥️ Como rodar o projeto

Cada pasta é um projeto React/Vite independente.  
Para cada um dos projetos, é preciso seguir os passos abaixo para rodar o projeto:

1. **Instale as dependências**

```bash
cd 01-css-global # ou outra pasta
npm install
```

2. **Rode em modo desenvolvimento**

```bash
npm run dev
```

Abra o endereço indicado no terminal (geralmente `http://localhost:5173`).

> ℹ️ Instruções específicas de configuração (quando necessário) estão no `README.md` de cada pasta.

## ✅ Funcionalidades Atendidas

- Navbar fixa com logo, contador do carrinho e botão para alternar tema (claro/escuro) com persistência.
- Grid de produtos responsivo com breakpoints conforme solicitado.
- Cards com imagem 1:1, título com 2 linhas e ellipsis, preço, rating, tag e botão com variantes.
- Estados de hover, focus, disabled e loading com skeleton animado.
- Dark mode aplicado a cores, sombras e bordas, respeitando contraste.
- Navegação por teclado e uso de `aria-*`.
- Transições suaves de 150--250ms.

## 🛠 Tecnologias utilizadas

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)