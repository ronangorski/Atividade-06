import React from "react";
import Skeleton from "./Skeleton";

export default function ProductCard({ product, addToCart, loadingButton }) {
  const { title, price, rating, tag, image } = product;
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <article
      tabIndex={0}
      className="product-card"
      aria-label={`${title}, preço ${price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, avaliação ${rating} estrelas`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="product-image"
        width={300}
        height={300}
      />
      <div className="product-tag" aria-label={`Etiqueta: ${tag}`}>
        {tag}
      </div>
      <h2 className="product-title">{title}</h2>
      <div className="product-price">
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div
        className="product-rating"
        aria-label={`Avaliação: ${rating} de 5 estrelas`}
      >
        {stars}
      </div>
      <button
        className="btn btn-solid"
        type="button"
        onClick={addToCart}
        disabled={loadingButton}
        aria-label={`Adicionar ${title} ao carrinho`}
      >
        {loadingButton ? <Skeleton height="20px" /> : "Adicionar"}
      </button>
    </article>
  );
}