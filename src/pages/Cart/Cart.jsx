import { useCart } from "@/shop/cart";
import React, { useState } from "react";
import Card from "./Card";
import { Button, Input } from "@chakra-ui/react";
import { RiCoupon2Fill } from "react-icons/ri";
import { MdDiscount } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { EmptyState } from "@/components/ui/empty-state";

const Cart = () => {
  const { CartProducts } = useCart();
  const sum = CartProducts.reduce((accumulator, item) => {
    return accumulator + item.price * item.count;
  }, 0);
  const [deliveryFee, setDeliveryFee] = useState(15);
  const [Coupon_code, setCoupon_code] = useState("");
  const checkdiscount = () => {
    if (Coupon_code === "2A5G09DZ") {
      setDeliveryFee(0);
    } else {
      setDeliveryFee(15);
    }
  };

  if (CartProducts.length === 0) {
    return (
      <div className="h-[70vh] flex  items-center">
        <EmptyState
          icon={<LuShoppingCart />}
          title="Your cart is empty"
          description="Explore our products and add items to your cart"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-16 ">
      <div>
        <p className="text-4xl font-black ">YOUR CART</p>
      </div>
      <div className="flex gap-3 justify-between max-md:flex-col">
        <div className="border p-2 rounded-lg flex flex-col gap-5 w-[50%] max-md:w-full">
          {CartProducts.map((product) => (
            <div>
              <Card product={product} />
              <hr className="border mt-3 mx-[30px]" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 w-[45%] max-md:w-full border rounded-lg p-4">
          <div>
            <p className="text-3xl BoldDigit">Order Summary</p>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex justify-between items-center">
              <p className="text-2xl">Subtotal</p>
              <p className="BoldDigit text-xl">$ {sum}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Delivery Fee</p>
              <p className="BoldDigit text-xl">$ {deliveryFee}</p>
            </div>
            <div>
              <hr />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl">Total Cart Value</p>
              <p className="BoldDigit text-xl">{sum + deliveryFee}</p>
            </div>
            <div className="flex gap-2">
              <Input
                type="text"
                className="rounded-full border-2 px-4"
                placeholder={`Add promo code`}
                onChange={(e) => setCoupon_code(e.target.value)}
              />
              <Button
                className="py-2 px-7 text-2xl bg-black text-white rounded-full "
                onClick={checkdiscount}
              >
                Apply
              </Button>
            </div>
            <div>
              <Button className="border bg-black text-white w-full rounded-full">
                Go to Checkout <FaArrowRightLong />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
