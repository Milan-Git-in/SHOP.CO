import { Box } from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsPaypal, BsTwitter } from "react-icons/bs";
import { FaApplePay, FaFacebook } from "react-icons/fa";
import { useColorModeValue } from "./ui/color-mode";
import { GrGooglePay, GrVisa } from "react-icons/gr";

const Footer = () => {
  const textclr = useColorModeValue("text-zinc-500", "text-gray-400");
  return (
    <Box
      bg={useColorModeValue("gray.900", "gray.200")}
      className="flex flex-col py-10 px-[2vw] select-none"
    >
      <Box className="flex  max-sm:flex-col gap-5">
        <div className="flex flex-col gap-y-5 max-w-[20%] max-sm:min-w-[100%]">
          <div className="Shop text-3xl">SHOP.CO</div>
          <div className={`lato-light ${textclr}`}>
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </div>
          <div className="flex gap-2">
            <BsTwitter className="text-2xl " />
            <FaFacebook className="text-2xl " />
            <BsInstagram className=" text-2xl " />
            <BsGithub className=" text-2xl " />
          </div>
        </div>
        <div className="grid  gap-x-[8vw] grid-cols-4 grid-rows-1 max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:gap-y-[7vh] max-sm:mt-[9vh]">
          <div className="flex flex-col gap-3">
            <div className="lato">COMPANY</div>
            <div className={`${textclr}`}>About</div>
            <div className={`${textclr}`}>Features</div>
            <div className={`${textclr}`}>Works</div>
            <div className={`${textclr}`}>Career</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="lato">HELP</div>
            <div className={`${textclr}`}>Customer Support</div>
            <div className={`${textclr}`}>Delivery Details</div>
            <div className={`${textclr}`}>Terms & Conditions</div>
            <div className={`${textclr}`}>Privacy Policy</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="lato">FAQ</div>
            <div className={`${textclr}`}>Account</div>
            <div className={`${textclr}`}>Manage Deliveries</div>
            <div className={`${textclr}`}>Orders</div>
            <div className={`${textclr}`}>Payments</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="lato">RESOURCES</div>
            <div className={`${textclr}`}>Free eBooks</div>
            <div className={`${textclr}`}>Development Tutorial</div>
            <div className={`${textclr}`}>How to - Blog</div>
            <div className={`${textclr}`}>Youtube Playlist</div>
          </div>
        </div>
      </Box>
      <div className=" p-5 self-center">
        <hr
          className={`w-[90vw]  opacity-50 self-center ${useColorModeValue(
            "border-zinc-600",
            "border-zinc-400"
          )}`}
        />
      </div>
      <div className="flex justify-between max-sm:flex-col max-sm:text-center max-sm:items-center max-sm:gap-5">
        <div className={`${textclr}`}>
          Shop.co©️ 2023-2025. All Rights Reserved
        </div>
        <div className="flex gap-5 text-3xl">
          <GrVisa />
          <BsPaypal />
          <FaApplePay />
        </div>
      </div>
    </Box>
  );
};

export default Footer;
