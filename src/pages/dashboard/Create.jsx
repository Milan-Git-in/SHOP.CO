import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Box,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import React, { useEffect, useState } from "react";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import { useProducts } from "@/shop/product";
import { PiSunDuotone } from "react-icons/pi";
import { RiMoonClearFill } from "react-icons/ri";
import { useUser } from "@/shop/users";
import { BiDownArrow, BiPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TbHomeEco } from "react-icons/tb";

const CreatePage = () => {
  // User
  const { Userdetails } = useUser();
  // Product details
  const [newproduct, setnewProduct] = useState({
    name: "",
    image_url: "",
    price: "",
    about: "",
    imgtwo: "",
    imgthree: "",
    imgfour: "",
    owner_id: Userdetails.id,
    style: "",
    type: "",
  });
  const { createProduct } = useProducts();

  //Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();

  //Text gradient
  const [gradientFrom, setGradientFrom] = useState("cyan.200");
  const [textcolor, setTextcolor] = useState("gray.100");
  const [textclr, setTextclr] = useState("text-white");

  // Gradient Effects
  useEffect(() => {
    colorMode === "light"
      ? (setGradientFrom("red.500"),
        setTextcolor("gray.800"),
        setTextclr("text-black"))
      : (setGradientFrom("cyan.200"),
        setTextcolor("gray.100"),
        setTextclr("text-white"));
  }, [colorMode]);

  //Form Submit logic
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(newproduct);
    const { success, message } = await createProduct(newproduct);
    if (!success) {
      toaster.create({
        title: message,
        type: "error",
      });
      console.log("Fail");
    } else {
      toaster.create({
        title: message,
        type: "success",
      });

      setnewProduct({
        name: "",
        image_url: "",
        price: "",
        about: "",
        imgtwo: "",
        imgthree: "",
        imgfour: "",
        owner_id: Userdetails.id,
        style: "",
        type: "",
      });
    }
  };

  return (
    <div>
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
          <Link to={"/dashboard"}>
            <Button
            // style={{
            //   backgroundColor: "black",
            //   color: "wheat",
            //   borderRadius: "5",
            // }}
            >
              <TbHomeEco fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <PiSunDuotone /> : <RiMoonClearFill />}
          </Button>
        </div>
      </div>

      <div className="flex justify-center p-5 text-center 500 max-sm:flex-col max-sm:gap-5">
        <div className="w-1/3  max-sm:w-full flex flex-col">
          {/* https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg */}

          <p className="justify-start flex">Product Preview</p>

          <img
            className="w-full rounded-xl"
            src={newproduct?.image_url}
            alt="Enter Product Url & See What Happens!"
          />
          <div className="flex gap-5 p-3">
            <div className=" break-words w-1/2">
              {newproduct.name !== "" && (
                <p className="lato text-xl">Name: {newproduct.name}</p>
              )}

              {newproduct.price !== "" && (
                <p className="lato text-xl">$ {newproduct.price}</p>
              )}

              {newproduct.about !== "" && (
                <p className="lato text-xl">About: {newproduct.about}</p>
              )}
            </div>
            <div className="w-1/2 flex flex-col gap-1">
              {newproduct.style !== "" && (
                <p className="lato text-xl">Style: {newproduct.style}</p>
              )}
              {newproduct.type !== "" && (
                <p className="text-xl lato">Type: {newproduct.type}</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-2/3  flex flex-col max-sm:w-full">
          <div className="lato-bold text-3xl">CREATE YOUR PRODUCT</div>
          <div>
            <form
              className="flex gap-3 p-3 flex-col"
              onSubmit={(e) => handleClick(e)}
            >
              <Input
                placeholder="Product Name"
                px={4}
                value={newproduct.name}
                onChange={(e) =>
                  setnewProduct({ ...newproduct, name: e.target.value })
                }
                bg={useColorModeValue("gray.100", "gray.900")}
                color={useColorModeValue("gray.800", "gray.200")}
              />

              <Input
                placeholder="Product Image"
                px={4}
                value={newproduct.image_url}
                onChange={(e) => {
                  setnewProduct({ ...newproduct, image_url: e.target.value });
                }}
                bg={useColorModeValue("gray.100", "gray.900")}
                color={useColorModeValue("gray.800", "gray.200")}
              />
              <Input
                placeholder="Product Price"
                px={4}
                type="number"
                value={newproduct.price}
                onChange={(e) => {
                  setnewProduct({ ...newproduct, price: e.target.value });
                }}
                bg={useColorModeValue("gray.100", "gray.900")}
                color={useColorModeValue("gray.800", "gray.200")}
              />
              <Input
                placeholder="Product About"
                px={4}
                value={newproduct.about}
                onChange={(e) => {
                  setnewProduct({ ...newproduct, about: e.target.value });
                }}
                bg={useColorModeValue("gray.100", "gray.900")}
                color={useColorModeValue("gray.800", "gray.200")}
              />
              <p className="self-start -mb-3 lato ">Occasion?</p>
              <select
                className={`${textclr} h-10 rounded-md px-5`}
                value={newproduct.style}
                onChange={(e) => {
                  setnewProduct({
                    ...newproduct,
                    style: e.target.value,
                  });
                }}
              >
                <option value="CASUAL">Casual</option>
                <option value="GYM">GYM</option>
                <option value="PARTY">Party</option>
                <option value="FORMAL">Formal</option>
              </select>

              <p className="self-start -mb-3">Catagory</p>
              <select
                className={`${textclr} h-10 rounded-md px-5`}
                value={newproduct.type}
                onChange={(e) => {
                  setnewProduct({
                    ...newproduct,
                    type: e.target.value,
                  });
                }}
              >
                <option value="PAJAMAS">Pajamas</option>
                <option value="HOODIE">Hoodie</option>
                <option value="SHIRT">SHIRT</option>
                <option value="TROUSERS">Trousers</option>
                <option value="T-SHIRT">T-SHIRT</option>
                <option value="JEANS">JEANS</option>
              </select>
              {/* Optional 1 */}
              <AccordionRoot collapsible>
                <AccordionItem>
                  <AccordionItemTrigger>
                    Have more Product images?
                    <BiDownArrow />
                  </AccordionItemTrigger>
                  <AccordionItemContent className="flex flex-col gap-2">
                    <Input
                      placeholder="Product Image"
                      px={4}
                      value={newproduct.imgtwo}
                      onChange={(e) => {
                        setnewProduct({
                          ...newproduct,
                          imgtwo: e.target.value,
                        });
                      }}
                      bg={useColorModeValue("gray.100", "gray.900")}
                      color={useColorModeValue("gray.800", "gray.200")}
                    />
                    <Input
                      placeholder="Product Image"
                      px={4}
                      value={newproduct.imgthree}
                      onChange={(e) => {
                        setnewProduct({
                          ...newproduct,
                          imgthree: e.target.value,
                        });
                      }}
                      bg={useColorModeValue("gray.100", "gray.900")}
                      color={useColorModeValue("gray.800", "gray.200")}
                    />
                    <Input
                      placeholder="Product Image"
                      px={4}
                      value={newproduct.imgfour}
                      onChange={(e) => {
                        setnewProduct({
                          ...newproduct,
                          imgfour: e.target.value,
                        });
                      }}
                      bg={useColorModeValue("gray.100", "gray.900")}
                      color={useColorModeValue("gray.800", "gray.200")}
                    />
                  </AccordionItemContent>
                </AccordionItem>
              </AccordionRoot>
              <input
                type="submit"
                className={`border p-2 ${
                  colorMode === "light" ? "bg-gray-100" : "bg-zinc-900"
                }  ${
                  colorMode === "light" ? "text-black" : "text-white"
                } rounded-md max-w-[500px] w-[60vw] self-center `}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
