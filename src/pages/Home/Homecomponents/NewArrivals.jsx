import { useProducts } from "@/shop/product";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const { fetchProducts, products } = useProducts();
  const data = products
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 4);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="flex flex-col gap-[100px] mt-[150px]">
      <div className="text-3xl lato-bold self-center">NEW ARRIVALS</div>
      <div className="flex flex-wrap max-sm:flex-col   justify-center">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            image_url={item.image_url}
            name={item.name}
            price={item.price}
            about={item.about}
          />
        ))}
      </div>
      <Link to={"/Showcase"} state={{ style: "CASUAL" }}>
        <button className="border border-gray-500 rounded-2xl px-2 py-1 text-xl w-[25vw] self-center">
          View All
        </button>
      </Link>
      <hr
        className={`w-[80vw] opacity-50 self-center ${useColorModeValue(
          "border-white ",
          "border-black "
        )}`}
      />
    </div>
  );
};

export default NewArrivals;
