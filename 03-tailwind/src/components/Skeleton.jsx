import React from "react";

export default function Skeleton({ height }) {
  return (
    <div
      className="w-full aspect-square bg-[#007bff] rounded-lg animate-pulse select-none"
      style={height ? { height } : undefined}
      aria-busy="true"
      aria-label="Carregando..."
    />
  );
}