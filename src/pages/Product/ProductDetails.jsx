import { Button } from "@/components/ui/button";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useCart } from "@/shop/cart";
import { useProducts } from "@/shop/product";
import { Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Productdetails = () => {
  const location = useLocation();
  const { id } = location.state || "";
  // const [id, setId] = useState(location.state || "");
  const { products } = useProducts();
  const [Product, setProduct] = useState(
    products.filter((item) => item.id === id)[0]
  );
  const [mainImg, setMainImg] = useState(Product.image_url);

  useEffect(() => {
    setProduct(products.filter((item) => item.id === id)[0]);
  }, [id]);
  useEffect(() => {
    setMainImg(Product.image_url);
    setThumbnails([Product.imgtwo, Product.imgthree, Product.imgfour]);
  }, [Product]);
  const [thumbnails, setThumbnails] = useState([
    Product.imgtwo,
    Product.imgthree,
    Product.imgfour,
  ]);
  const [counter, setCounter] = useState(1);

  const handleThumbnailClick = (clickedImage) => {
    // Update main image to the clicked image
    setMainImg(clickedImage);
    // Replace the clicked image with the previous main image in the thumbnails array
    setThumbnails((prevThumbnails) =>
      prevThumbnails.map((thumb) => (thumb === clickedImage ? mainImg : thumb))
    );
  };
  const [cartText, setCartText] = useState("Add to Cart");
  const { addToCart, CartProducts } = useCart();
  const handleCart = () => {
    setCartText("Adding to Cart");
    addToCart(
      Product.id,
      Product.image_url,
      Product.name,
      Product.price,
      counter
    );
    setCartText("Added To Cart ✔️");
    setTimeout(() => {
      setCartText("Add to Cart");
    }, 3000);

    console.log(CartProducts);
  };

  return (
    <div>
      <div className="flex flex-col select-none">
        <div className="flex max-lg:flex-col gap-2 mt-3">
          {/* Images */}
          <div className="flex max-sm:flex-col-reverse gap-2">
            <div className="flex flex-col max-sm:flex-row gap-3 justify-center">
              {thumbnails.map((img, index) => (
                <div
                  key={index}
                  className="border rounded-xl max-sm:w-[31%] cursor-pointer"
                  onClick={() => handleThumbnailClick(img)} // Swap main image on click
                >
                  {img && (
                    <img
                      className="max-h-[130px] max-w-[100px] min-h-[100px] max-sm:min-h-[140px] max-sm:min-w-full rounded-xl"
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="rounded-xl border">
              <img
                src={mainImg}
                alt="Main Product"
                className=" rounded-2xl p-1 w-full h-[390px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-3 p-4">
            <div>
              <p className="text-3xl Shop break-words select-none">
                {Product.name.toUpperCase()}
              </p>
            </div>
            <div>
              <p className="text-2xl lato select-none">${Product.price}</p>
            </div>
            <div>
              <p className="lato-light select-none">{Product.about}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div
                className={`${useColorModeValue(
                  "bg-black",
                  "bg-gray-300"
                )} ${useColorModeValue(
                  "text-white",
                  "text-black"
                )}  w-[130px] justify-between p-2 rounded-3xl flex items-center`}
              >
                {/* Counter */}
                <FaMinus
                  onClick={() =>
                    setCounter((prev) => (prev - 1 >= 1 ? prev - 1 : prev))
                  }
                />
                <p className="text-xl mx-2 pointer-events-none select-none">
                  {counter}
                </p>
                <FiPlus onClick={() => setCounter((prev) => prev + 1)} />
              </div>
              <div>
                <Button
                  className={`${useColorModeValue(
                    "bg-zinc-100",
                    "bg-zinc-900"
                  )} px-5 rounded-3xl ${useColorModeValue(
                    "text-black",
                    "text-white"
                  )} w-[70vw] max-w-[450px]`}
                  onClick={handleCart}
                >
                  {cartText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{/* The Logic of Reviews Right here! */}</div>
    </div>
  );
};

export default Productdetails;
