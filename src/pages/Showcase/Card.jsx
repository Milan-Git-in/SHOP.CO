import React from "react";

const Card = ({ product }) => {
  return (
    <div className="flex flex-col gap-y-1 p-4">
      <img
        className="rounded-xl h-[300px] max-lg:h-[200px]"
        src={product.image_url}
        alt={product.name}
      />
      <p className="lato text-xl">{product.name}</p>
      <p className="lato text-xl">$ {product.price}</p>
    </div>
  );
};

export default Card;
