import React from "react";
import Button from "../Button/Button";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  product,
  addToCart,
  loadingButton,
  theme,
}) {
  const { title, price, rating, tag, image } = product;
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <article
      tabIndex={0}
      className={`${styles.productCard} ${
        theme === "dark" ? styles.darkMode : ""
      }`}
      aria-label={`${title}, preço ${price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}, avaliação ${rating} estrelas`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={styles.productImage}
        width={300}
        height={300}
      />
      <div className={styles.productTag} aria-label={`Etiqueta: ${tag}`}>
        {tag}
      </div>
      <h2 className={styles.productTitle}>{title}</h2>
      <div className={styles.productPrice}>
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div
        className={styles.productRating}
        aria-label={`Avaliação: ${rating} de 5 estrelas`}
      >
        {stars}
      </div>
      <Button
        onClick={addToCart}
        disabled={loadingButton}
        aria-label={`Adicionar ${title} ao carrinho`}
        variant="solid"
      >
        {loadingButton ? <Skeleton height="20px" /> : "Adicionar"}
      </Button>
    </article>
  );
}
