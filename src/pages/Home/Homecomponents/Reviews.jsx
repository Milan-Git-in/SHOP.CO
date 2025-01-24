import ReviewCarousel from "@/components/ui/ReviewCarousel";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Reviews = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const reviews = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      name: "Emily R.",
      text: "Shop.co has completely transformed my wardrobe! The quality of the fabrics is unmatched, and the variety of designs makes it so easy to mix and match. I'm always excited to shop here.",
    },
    {
      name: "Michael T.",
      text: "I love how easy it is to shop at Shop.co. Whether I'm looking for something casual or a more formal outfit, the website offers such a great variety. Plus, the clothes fit perfectly every time!",
    },
    {
      name: "Sophia D.",
      text: "Shop.co is my go-to for stylish and affordable clothing. The attention to detail in every piece is clear, and I’ve never been disappointed with my purchases. I highly recommend it to fashion lovers!",
    },
    {
      name: "David B.",
      text: "I'm so impressed by the quality and craftsmanship of Shop.co's clothes. From the stitching to the fabric, everything feels premium. I always get compliments whenever I wear something from here.",
    },
  ];

  let [current, setCurrent] = useState(0);
  let previousreviews = () => {
    if (current === 0) setCurrent(reviews.length - 1);
    else setCurrent(current - 1);
  };

  let nextreviews = () => {
    if (current === reviews.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  const transformValue =
    windowWidth <= 640
      ? `translateX(-${current * 105}vw)`
      : `translateX(-${current * 44}vw)`;
  return (
    // Remove min-h-[50vh] and border border-red-500 in below Div when Adding BackEnd reviews
    <div className="flex flex-col mt-60 min-h-[50vh] ">
      <div className="text-3xl Shop flex justify-between px-[150px] max-md:text-2xl max-sm:px-[20px] ">
        <Text className="Shop">OUR HAPPY CUSTOMERS</Text>
        <div className="flex gap-5 items-center">
          <FaArrowLeft size={20} onClick={previousreviews} />
          <FaArrowRight size={20} onClick={nextreviews} />
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-5 self-center transition ease-in-out duration-75 mt-[12vh]"
          style={{ transform: transformValue }}
        >
          {reviews.map((item) => (
            <div
              className=" rounded-2xl overflow-hidden min-w-[44vw] max-sm:min-w[88vw] flex flex-col gap-5 max-sm:min-w-[100vw]  "
              key={item.name}
            >
              <div className="text-center pt-5">{item.name}</div>
              <div className="text-center w-[45vw]   max-w-[400px] max-sm:max-w-[500px] self-center">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
