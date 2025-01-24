import React, { useEffect, useState } from "react";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useProducts } from "@/shop/product";
import { toaster } from "@/components/ui/toaster";
import { For, HStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useDisclosure } from "@chakra-ui/react";

const Card = (product) => {
  console.log(product);
  const [isOpen, setIsOpen] = useState(false); // Control dialog state

  const [newproduct, setnewProduct] = useState({
    name: product.product.name,
    price: product.product.price,
    image_url: product.product.image_url,
    imgtwo: product.product.imgtwo,
    imgthree: product.product.imgthree,
    imgfour: product.product.imgfour,
    style: product.product.style,
    about: product.product.about,
    type: product.product.type,
  });

  const { colorMode, toggleColorMode } = useColorMode();
  const [bcolor, setBcolor] = useState("border-white");

  const { deleteProduct, UpdateProduct } = useProducts();

  useEffect(() => {
    if (colorMode === "light") {
      setBcolor("border-white  rounded-xl");
    }
    if (colorMode === "dark") {
      setBcolor("border-black rounded-xl");
    }
  }, [colorMode]);

  const handleClick = async (product_Id) => {
    const { success, message } = await deleteProduct(product_Id);
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
    }
  };

  const updateProduct = async (id, newproduct) => {
    console.log("Card jsx", id);
    const { success, message } = await UpdateProduct(id, newproduct);
    if (!success) {
      toaster.create({
        title: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: message,
        type: "success",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <Box
        _hover={{ transform: "translateY(-15px)", shadow: "xl" }}
        transition={"all 0.5s"}
        className={`border ${bcolor}  h-[70vh]`}
      >
        <div className="items-center flex flex-col gap-5 ">
          <img
            src={product.product.image_url}
            alt={product.product.name}
            className="rounded-[5vh]  p-5 h-[50vh] "
          />
          <div className={`text-2xl `}>{product.product.name}</div>
          <div className="text-emerald-400 text-xl">
            $ {product.product.price}
          </div>
        </div>
        <div className="flex gap-5">
          <div
            className={`p-1 -mt-[50px] ml-5 cursor-pointer border ${bcolor}  text-4xl items-start `}
          >
            <HStack wrap="wrap" gap="4">
              <DialogRoot
                pen={isOpen}
                onOpenChange={setIsOpen}
                key={"center"}
                placement={"center"}
                motionPreset="slide-in-bottom"
              >
                <DialogTrigger asChild>
                  <CiEdit />
                </DialogTrigger>
                <DialogContent className="p-5">
                  <DialogHeader>
                    <DialogTitle className="my-2 text-center">
                      Update Product Details
                    </DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                    <div className="flex flex-col gap-4">
                      <div className="border-l-2 border-r-2 rounded-md p-1">
                        Product Name:
                        <Input
                          className="px-5"
                          value={newproduct.name}
                          onChange={(e) =>
                            setnewProduct({
                              ...newproduct,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="border-l-2 border-r-2 rounded-md p-1">
                        Product Price:
                        <Input
                          className="px-5 "
                          value={newproduct.price}
                          onChange={(e) =>
                            setnewProduct({
                              ...newproduct,
                              price: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="border-l-2 border-r-2 rounded-md p-1">
                        Product About
                        <Input
                          className="px-5 "
                          value={newproduct.about}
                          onChange={(e) =>
                            setnewProduct({
                              ...newproduct,
                              about: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="border-l-2 border-r-2 rounded-md p-1">
                        Product Image(s):
                        <Input
                          className="px-5 "
                          value={newproduct.image_url}
                          onChange={(e) =>
                            setnewProduct({
                              ...newproduct,
                              image_url: e.target.value,
                            })
                          }
                        />
                        <Input
                          className="px-5 "
                          value={newproduct.imgtwo}
                          onChange={(e) =>
                            setnewProduct({
                              ...newproduct,
                              imgtwo: e.target.value,
                            })
                          }
                        />
                        <Input
                          className="px-5 "
                          value={newproduct.imgthree}
                          onChange={(e) =>
                            setnewProduct({
                              ...newproduct,
                              imgthree: e.target.value,
                            })
                          }
                        />
                        <Input
                          className="px-5 "
                          value={newproduct.imgfour}
                          onChange={(e) =>
                            setnewProduct({
                              ...newproduct,
                              imgfour: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="border-x-2 rounded-md p-1">
                        <p className="self-start">Catagory</p>
                        <select
                          className={` h-10 rounded-md px-5`}
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
                      </div>
                      <div className="border-x-2 rounded-md p-1">
                        <p className="self-start  lato my-2">Occasion?</p>
                        <select
                          className={` h-10 rounded-md px-5`}
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
                      </div>
                    </div>
                  </DialogBody>
                  <DialogFooter>
                    <DialogActionTrigger asChild>
                      <div>
                        <Button variant="outline">Cancel</Button>

                        <Button
                          onClick={() => {
                            updateProduct(product.product.id, newproduct);
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    </DialogActionTrigger>
                  </DialogFooter>
                  <DialogCloseTrigger />
                </DialogContent>
              </DialogRoot>
              <MdDelete
                onClick={() => {
                  handleClick(product.product.id);
                }}
              />
            </HStack>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Card;
