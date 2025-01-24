import React from "react";
import { Box, Separator } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const Hero = () => {
  const iconColor = useColorModeValue("white", "black"); // Dark mode and light mode colors
  return (
    <Box
      className="sm:ml-[2vw] min-h-[70vh] mt-[5vh]"
      borderRadius={"xl"}
      bg={useColorModeValue("gray.900", "gray.200")}
    >
      <div className="flex max-md:flex-col">
        {/* Left Section */}
        <div className="flex w-[60vw] max-md:w-screen flex-col pt-[10vh] pl-[5vw] gap-4 ">
          <div className="flex flex-col text-[3rem] max-md:text-[2.5rem] max-sm:text-[3.5rem]">
            <p className="lato-bold -mt-5">FIND CLOTHES</p>
            <p className="lato-bold -mt-5">THAT MATCHES</p>
            <p className="lato-bold -mt-5">YOUR STYLE</p>
          </div>
          <div className="max-w-[410px] max-sm:-mt-[20px]">
            <p className="lato-light max-sm:text-[1.2rem]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <div>
            <Button
              bg={useColorModeValue("gray.100", "gray.800")}
              color={useColorModeValue("gray.900", "gray.100")}
              size={"sm"}
              borderRadius={"4xl"}
              variant="outline"
              p={2}
              colorPalette={"gray"}
              className="max-sm:w-[90vw] text-xl"
              px={10}
            >
              Shop Now
            </Button>
          </div>
          <div className="flex flex-wrap gap-1 max-sm:justify-center max-sm:mt-[5vh]">
            <div className="flex flex-col max-sm:w-[33%]">
              <div className="text-[1.8rem] BoldDigit">200+</div>
              <div className="lato-light">International Brands</div>
            </div>
            <div>
              <Separator
                orientation="vertical"
                height="16"
                borderColor={useColorModeValue("gray.500", "gray.300")}
                borderWidth="1px"
                className="ml-2"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-[1.8rem] max-sm:w-[70%] BoldDigit">
                2,000+
              </div>
              <div className="lato-light">High-Quality Products</div>
            </div>
            <div>
              <Separator
                orientation="vertical"
                height="16"
                borderColor={useColorModeValue("gray.500", "gray.300")}
                borderWidth="1px"
                className="ml-2 md:hidden max-sm:hidden sm:hidden lg:block"
              />
            </div>
            <div className="flex flex-col text-center">
              <div className="text-[1.8rem] BoldDigit">30,000+</div>
              <div className="lato-light">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[70vw]">
          <Box className="h-[70vh] relative overflow-hidden max-sm:h-[60vh]">
            {/* Main Image */}
            <img
              src="hero2cpy.png"
              className="absolute h-full w-full object-cover"
              style={{ objectFit: "cover" }}
              alt="Main Content"
            />

            {/* Star 1 */}
            <svg
              className="absolute w-[22%] sm:w-[10%] md:w-[16%] top-[5%] left-[5%] z-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 122.88"
              fill={iconColor}
            >
              <path d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z" />
            </svg>

            {/* Star 2 */}
            <svg
              className="absolute w-[10%] sm:w-[8%] md:w-[6%] md:hidden top-[70%] right-[5%] z-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 122.88"
              fill={iconColor}
            >
              <path d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z" />
            </svg>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Hero;
