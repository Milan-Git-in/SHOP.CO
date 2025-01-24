import { useColorModeValue } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ name, price, about, image_url }) => {
  return (
    <Box
      className="p-3 flex flex-col gap-2  rounded-lg text-xl max-sm:self-center max-sm:w-full"
      color={useColorModeValue("gray.100", "gray.900")}
    >
      <img src={image_url} className="size-64 rounded-xl max-sm:w-full" />
      <div>{name}</div>
      <div>${price}</div>
    </Box>
  );
};

export default ProductCard;
