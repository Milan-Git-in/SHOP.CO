import React from "react";
import Hero from "./Homecomponents/Hero";
import Companies from "./Homecomponents/Companies";
import NewArrivals from "./Homecomponents/NewArrivals";
import OurProducts from "./Homecomponents/OurProducts";
import BrowsebyStyle from "./Homecomponents/BrowsebyStyle";
import Reviews from "./Homecomponents/Reviews";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <NewArrivals />
      <OurProducts />
      <BrowsebyStyle />
      <Reviews />
    </>
  );
};

export default Homepage;
