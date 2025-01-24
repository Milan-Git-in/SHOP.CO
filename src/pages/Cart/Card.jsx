import { useColorModeValue } from "@/components/ui/color-mode";
import { useCart } from "@/shop/cart";
import React from "react";
import { FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Card = ({ product }) => {
  const { addMore, removeFromCart } = useCart();

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div>
          <img
            src={product.image_url}
            alt="Product Image"
            className="w-[300px] h-[200px] rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-2 self-center  mt-[50%]">
            <p className="text-xl lato-bold ml-2">{product.name}</p>
            <p className="BoldDigit text-xl">$ {product.price}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-between  ">
        <div className="text-2xl self-end text-red-500">
          <MdDelete
            onClick={() => removeFromCart(product.product_id, product.count)}
          />
        </div>
        <div
          className={`${useColorModeValue(
            "bg-black",
            "bg-gray-300"
          )} ${useColorModeValue(
            "text-white",
            "text-black"
          )}  w-[100px] mb-[40px] justify-between p-2 rounded-3xl flex items-center`}
        >
          {/* Counter */}
          <FaMinus onClick={() => removeFromCart(product.product_id, 1)} />
          <p className="text-xl mx-2 pointer-events-none select-none">
            {product.count}
          </p>
          <FiPlus onClick={() => addMore(product.product_id)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
