import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BrowsebyStyle = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={`mt-24 rounded-xl p-10 w-[90%] max-w-[1300px] max-sm:p-0 max-sm:py-10 ${useColorModeValue(
          "bg-zinc-900",
          "bg-gray-200"
        )}`}
      >
        <Text className="text-5xl lato-bold text-center mb-6">
          BROWSE BY DRESS STYLE
        </Text>

        <div className="grid grid-rows-2 grid-cols-3  max-sm:flex max-sm:flex-col">
          <div className=" p-5 row-span-1 col-span-1 rounded-xl">
            <div className="relative">
              <Link to={"/Showcase"} state={{ style: "CASUAL" }}>
                <img
                  src="./Casual.png"
                  alt="Casual"
                  className="max-sm:h-[23vh] max-sm:min-w-full rounded-xl h-[320px]"
                />
                <p className="absolute top-5 left-[5%] text-2xl BoldDigit text-black">
                  Casual
                </p>
              </Link>
            </div>
          </div>
          <div className=" p-5 col-span-2 rounded-xl">
            <div className="relative">
              <Link to={"/Showcase"} state={{ style: "FORMAL" }}>
                <img
                  src="./Formal.png"
                  alt="Formal"
                  className="max-sm:h-[23vh] min-w-full rounded-xl max-md:h-[320px] md:h-[320px] "
                />
                <p className="absolute top-5 left-[5%] text-2xl BoldDigit text-black">
                  Formal
                </p>
              </Link>
            </div>
          </div>
          <div className=" p-5 col-span-2 rounded-xl">
            <div className="relative">
              {" "}
              <Link to={"/Showcase"} state={{ style: "PARTY" }}>
                <img
                  src="./Party.png"
                  alt="Party"
                  className="max-sm:h-[23vh] min-w-full rounded-xl md:h-[320px] max-md:h-[320px]"
                />
                <p className="absolute top-5 left-[5%] text-2xl BoldDigit text-black">
                  Party
                </p>
              </Link>
            </div>
          </div>
          <div className=" p-5 col-span-1 rounded-xl">
            <div className="relative">
              <Link to={"/Showcase"} state={{ style: "GYM" }}>
                <img
                  src="./Gym.png"
                  alt="Gym"
                  className=" max-sm:min-w-full rounded-xl max-sm:h-[23vh] h-[345px]"
                />
                <p className="absolute top-5 left-[5%] text-2xl BoldDigit text-black">
                  Gym
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsebyStyle;
