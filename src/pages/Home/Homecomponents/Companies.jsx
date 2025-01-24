import { useColorModeValue } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";
import React from "react";

const Companies = () => {
  return (
    <Box
      bg={useColorModeValue("gray.900", "gray.800")}
      className="flex flex-wrap gap-[10vw] min-h-[10vh] items-center pointer-events-none justify-center  pt-5 pb-4 "
    >
      <img className="h-6" src="./Versace.png" />
      <img className="h-6" src="./Zara.png" />
      <img className="h-6" src="./Gucci.png" />
      <img className="h-6" src="./Prada.png" />
      <img className="h-6" src="./CalvinKlein.png" />
    </Box>
  );
};

export default Companies;
