import { useColorMode } from "@/components/ui/color-mode";
import { Button } from "@chakra-ui/react";
import React from "react";
import { PiSunDuotone } from "react-icons/pi";
import { RiMoonClearFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Determine the type based on the current route
  const Type = ["/login"].includes(location.pathname) ? "Register?" : "Login?";

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="flex justify-between px-[8rem] py-[2rem] max-sm:gap-12 max-sm:px-2 max-sm:py-2">
      <div>
        <div className="Shop text-4xl">SHOP.CO</div>
      </div>

      <div className="flex gap-4 lato text-xl items-center">
        <Link to={Type === "Register?" ? "/register" : "/login"}>{Type}</Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <PiSunDuotone /> : <RiMoonClearFill />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
