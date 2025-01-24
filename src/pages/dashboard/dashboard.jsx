import {
  Button,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useColorMode } from "@/components/ui/color-mode";
import { Link } from "react-router";
import { useProducts } from "@/shop/product";
import { useUser } from "@/shop/users";
import Card from "./Dashboardcomponents/Card";
import { PiSunDuotone } from "react-icons/pi";
import { RiMoonClearFill } from "react-icons/ri";
import { BiPlusCircle } from "react-icons/bi";
const Dashboard = () => {
  const [gradientFrom, setGradientFrom] = useState("cyan.200");
  const { colorMode, toggleColorMode } = useColorMode();
  const [textcolor, setTextcolor] = useState("gray.100");
  useEffect(() => {
    colorMode === "light"
      ? (setGradientFrom("red.500"), setTextcolor("gray.800"))
      : (setGradientFrom("cyan.200"), setTextcolor("gray.100"));
  }, [colorMode]);
  const { fetchProduct, products } = useProducts();
  const { Userdetails } = useUser();
  useEffect(() => {
    console.log(Userdetails);
    fetchProduct(Userdetails.id);
    console.log(products);
  }, [fetchProduct]);

  return (
    <div className="w-screen p-[5vw]">
      <div className="flex flex-col gap-[10vh]">
        <div className="flex justify-between p-5">
          <div>
            <Text
              fontSize={{ base: "md", sm: "xl" }}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              textAlign={"center"}
              bgGradient="to-r"
              gradientFrom={gradientFrom}
              gradientTo="blue.700"
              bgClip={"text"}
            >
              {Userdetails?.name}'s Products 🚀
            </Text>
          </div>
          <div>
            <Link to={"/create"}>
              <Button
              // style={{
              //   backgroundColor: "black",
              //   color: "wheat",
              //   borderRadius: "5",
              // }}
              >
                <BiPlusCircle fontSize={20} />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <PiSunDuotone /> : <RiMoonClearFill />}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1 max-lg:grid-cols-2">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <Text
            className="mt-[5vh] -ml-[200px]"
            fontSize={"xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={textcolor}
          >
            No Products Found ☹️{"    |"}
            <Link to={"/create"}>
              <Text
                className="px-[1vw]"
                as={"span"}
                color={"blue.500"}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Create a Product?
              </Text>
            </Link>
          </Text>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
