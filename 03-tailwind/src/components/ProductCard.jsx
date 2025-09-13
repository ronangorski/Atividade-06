import React from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";

export default function ProductCard({ product, addToCart, loadingButton }) {
  const { title, price, rating, tag, image } = product;
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <article
      tabIndex={0}
      className="
        bg-inherit border border-black/10 dark:border-white/10
        rounded-lg shadow-sm p-4 flex flex-col gap-1.5
        transition-all duration-200 cursor-pointer
        min-h-[450px] outline-none
        hover:shadow-brand hover:-translate-y-1
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-brand focus-visible:outline-offset-2
      "
      aria-label={`${title}, preço ${price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}, avaliação ${rating} estrelas`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="
          w-full aspect-square object-contain
          bg-transparent rounded-lg flex-shrink-0 h-[250px]
        "
        width={300}
        height={300}
      />

      <div
        className="
          bg-brand text-white text-xs px-2 py-[2px]
          rounded-xl select-none self-start
        "
        aria-label={`Etiqueta: ${tag}`}
      >
        {tag}
      </div>

      <h2
        className="
          font-semibold text-base leading-[1.2em] h-[2.4em]
          overflow-hidden text-ellipsis line-clamp-2
        "
      >
        {title}
      </h2>

      <div className="font-bold text-lg text-brand">
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>

      <div
        className="text-[#f5a623] text-lg select-none"
        aria-label={`Avaliação: ${rating} de 5 estrelas`}
      >
        {stars}
      </div>

      <Button
        variant="solid"
        onClick={addToCart}
        disabled={loadingButton}
        aria-label={`Adicionar ${title} ao carrinho`}
      >
        {loadingButton ? <Skeleton height="20px" /> : "Adicionar"}
      </Button>
    </article>
  );
}