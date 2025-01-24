import React, { useEffect, useState } from "react";
import { BiCart, BiDownArrow, BiSearch } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, Input, MenuItemCommand } from "@chakra-ui/react";
import { FcDown, FcDownRight } from "react-icons/fc";
import { GrDown } from "react-icons/gr";
import { useColorMode } from "./ui/color-mode";
import Switch from "./ui/Switch";
import { PiSunDuotone } from "react-icons/pi";
import { RiMoonClearFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useDebounce from "@/useDebounce";
import { useProducts } from "@/shop/product";
const Header = () => {
  const { products } = useProducts();
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 1000);
  const [searchItems, setSearchItems] = useState([]);
  useEffect(() => {
    setSearchItems(
      products.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
      )
    );
    console.log(searchItems);
  }, [debouncedSearchText]);

  return (
    <div className="flex  max-lg:justify-between  justify-center text-xl  md:gap-5  py-5 px-10 max-md:px-0">
      <div className="flex gap-4">
        <DrawerRoot key={"start"} placement={"start"}>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant="outline" size="md">
              <GiHamburgerMenu className="text-4xl lg:hidden  " />
            </Button>
          </DrawerTrigger>
          <DrawerContent
            roundedTop={"start" === "bottom" ? "l3" : undefined}
            roundedBottom={"start" === "top" ? "l3" : undefined}
          >
            <DrawerHeader>
              <DrawerTitle className="text-3xl lato-regular ">
                Welcome to Shop.co!
              </DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Link to={"/Showcase"} state={{ style: "CASUAL" }}>
                <div className="text-2xl mt-20 text-center cursor-pointer border-b pb-2">
                  Casual
                </div>
              </Link>
              <Link to={"/Showcase"} state={{ style: "FORMAL" }}>
                <div className="text-2xl mt-3 text-center cursor-pointer border-b pb-2">
                  Formal
                </div>
              </Link>
              <Link to={"/Showcase"} state={{ style: "GYM" }}>
                <div className="text-2xl mt-3 text-center cursor-pointer border-b pb-2">
                  Gym
                </div>
              </Link>
              <Link to={"/Showcase"} state={{ style: "PARTY" }}>
                <div className="text-2xl mt-3 text-center cursor-pointer border-b pb-2">
                  Party
                </div>
              </Link>
              <div className="mt-[20vh] text-lg">
                At Shop.co we prioritise Customer Satisfaction and Experience
              </div>
              <div className="text-gray-300 my-2">
                Contact : 911 for any Customer Support
              </div>
              <div className="text-gray-300 my-2">
                2025©️ Copyright all Rights Reserved
              </div>
              <div className="text-gray-300 my-2">
                Located at: Silicon Vally, California , USA
              </div>
            </DrawerBody>
            <DrawerFooter>
              <DrawerActionTrigger asChild>
                <Button variant="outline">Close</Button>
              </DrawerActionTrigger>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>

        <div className="text-4xl lato-bold max-lg:text-3xl max-sm:-ml-4">
          <Link to={"/user"}>SHOP.CO</Link>
        </div>
      </div>

      <div className="flex   gap-5 lato-regular text-md max-lg:hidden">
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" size="xs" className="-mt-[3px]">
              Shop
              <GrDown />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem px={3} py={1} className="text-lg" value="Casual">
              <Link to={"/Showcase"} state={{ style: "CASUAL" }}>
                Casual
              </Link>
            </MenuItem>
            <MenuItem px={3} py={1} className="text-lg" value="Formal">
              <Link to={"/Showcase"} state={{ style: "FORMAL" }}>
                Formal
              </Link>
            </MenuItem>
            <MenuItem px={3} py={1} className="text-lg" value="Gym">
              <Link to={"/Showcase"} state={{ style: "GYM" }}>
                Gym
              </Link>
            </MenuItem>
            <MenuItem px={3} py={1} className="text-lg" value="Party">
              <Link to={"/Showcase"} state={{ style: "PARTY" }}>
                Party
              </Link>
            </MenuItem>
          </MenuContent>
        </MenuRoot>
        <div className="text-[1rem]">On Sale</div>
        <div className="text-[1rem]">New Arrivals</div>
        <div className="text-[1rem]">Brands</div>
      </div>
      {/* <div className="searchbar mx-5  min-w-[30vw] px-2 items-center flex  text-gray-500 ">
        <BiSearch className="text-3xl " />
        <Input className="w-full  border rounded-full -ml-10 pl-16 max-sm:text-sm" />
      </div> */}
      <div className="flex flex-col  ">
        <Input
          placeholder={`🔍 Search for Products`}
          onChange={(e) => setSearchText(e.target.value)}
          className={` rounded-full px-5 ${
            colorMode === "light"
              ? "bg-zinc-200 text-black"
              : "bg-black text-white"
          }`}
        />
        {debouncedSearchText.trimStart() !== "" && (
          <div className="overflow-x-scroll flex flex-col gap-5 max-h-[100px] rounded-xl border">
            {searchItems.length >= 0 &&
              searchItems.map((item) => (
                <Link to={"/details"} state={{ id: item.id }}>
                  <div className="flex gap-2 border pr-4 max-md:text-sm">
                    <img
                      src={item.image_url}
                      className="h-[90px] min-w-[100px]"
                    />
                    <div className="flex justify-between h-[30px] w-full flex-col py-2 max-sm:py-0 ">
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>

      <div className="flex justify-between gap-1">
        {/* <div className="lg:hidden   rounded-2xl  ">
          <BiSearch className="text-3xl " />
        </div> */}

        <Link to={"/Cart"}>
          <BiCart className="text-3xl" />
        </Link>
        <RxAvatar className="text-3xl " />
        <div className="-mt-1">
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <PiSunDuotone /> : <RiMoonClearFill />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
