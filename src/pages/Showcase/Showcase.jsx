import { useProducts } from "@/shop/product";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";
import { Button, HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
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
import { BiRightArrow } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { Slider } from "@/components/ui/slider";

const Showcase = () => {
  const location = useLocation();
  const { style } = location.state || {};
  const { products } = useProducts();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const [StartPrice, setStartPrice] = useState(0);
  const [priceOne, setpriceOne] = useState(0);
  const [endPrice, setEndPrice] = useState(1000);
  const [priceTwo, setPriceTwo] = useState(1000);

  const PRODUCTS_PER_PAGE = 9;
  // Filter products by style (initial filter)
  const productsByStyle = useMemo(
    () => products.filter((product) => product.style === style),
    [products, style]
  );
  const [showing, setShowing] = useState(true);
  // Function to filter T-Shirts
  const filter = (type) => {
    setFilteredProducts(() =>
      products.filter(
        (product) => product.type === type && product.style === style
      )
    );
    setShowing(false);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  useEffect(() => {
    setFilteredProducts(() =>
      products.filter(
        (product) =>
          Number(product.price) >= StartPrice &&
          Number(product.price) <= endPrice &&
          product.style === style
      )
    );
    setCurrentPage(1);
  }, [StartPrice, endPrice]);
  useEffect(() => {
    // When style changes, initialize `filteredProducts` with `productsByStyle`
    setFilteredProducts(productsByStyle);
  }, [productsByStyle]);
  useEffect(() => {
    setShowing(true);
  }, []);
  useEffect(() => {
    // Recalculate products for the current page whenever filteredProducts or currentPage changes

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    setDisplayedProducts(filteredProducts.slice(startIndex, endIndex));
  }, [currentPage, filteredProducts]);

  return (
    <div className="flex gap-2">
      <div className="w-1/3 max-w-[300px] mt-[100px] max-lg:hidden border max-h-[740px] rounded-2xl p-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="text-3xl Shop">Filters</p>
              <FaFilter />
            </div>
            <div>
              <hr className="border-b-2" />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="lato-light text-xl">T-Shirts</p>
              </div>
              <div>
                <BiRightArrow onClick={() => filter("T-SHIRT")} />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="lato-light text-xl">Pajamas</p>
              </div>
              <div>
                <BiRightArrow onClick={() => filter("PAJAMAS")} />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="lato-light text-xl">Hoodies</p>
              </div>
              <div>
                <BiRightArrow onClick={() => filter("HOODIE")} />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="lato-light text-xl">Shirts</p>
              </div>
              <div>
                <BiRightArrow onClick={() => filter("SHIRT")} />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="lato-light text-xl">Trousers</p>
              </div>
              <div>
                <BiRightArrow onClick={() => filter("TROUSERS")} />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="lato-light text-xl">Jeans</p>
              </div>
              <div>
                <BiRightArrow onClick={() => filter("JEANS")} />
              </div>
            </div>
            <div>
              <hr className="border-b-2" />
            </div>
            <div className="flex flex-col gap-2 p-2">
              <div className="text-3xl">Price</div>
              <div className="">
                <Slider
                  colorPalette="gray"
                  variant="solid"
                  width="233px"
                  // max={`${priceTwo}`}
                  max={`1000`}
                  defaultValue={[0, priceTwo]}
                  onValueChange={(e) =>
                    setPriceTwo(e.value[1], setpriceOne(e.value[0]))
                  }
                  onValueChangeEnd={(e) => (
                    setStartPrice(e.value[0]), setEndPrice(e.value[1])
                  )}
                  marks={[
                    {
                      value: [priceOne],
                      label: [`$${priceOne}`],
                    },
                    {
                      value: [priceTwo],
                      label: [`$${priceTwo}`],
                    },
                  ]}
                />
              </div>
              <div className="mt-[33px]">
                <hr />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="Shop text-4xl">Dress Style</p>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={"/Showcase"} state={{ style: "CASUAL" }}>
                  <div className="flex justify-between">
                    <p>Casaul</p>
                    <BiRightArrow />
                  </div>
                </Link>
                <Link to={"/Showcase"} state={{ style: "FORMAL" }}>
                  <div className="flex justify-between">
                    <p>Formal</p>
                    <BiRightArrow />
                  </div>
                </Link>
                <Link to={"/Showcase"} state={{ style: "PARTY" }}>
                  <div className="flex justify-between">
                    <p>Party</p>
                    <BiRightArrow />
                  </div>
                </Link>
                <Link to={"/Showcase"} state={{ style: "GYM" }}>
                  <div className="flex justify-between">
                    <p>Gym</p>
                    <BiRightArrow />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-2/3 flex-col max-lg:min-w-full">
        <div className="flex justify-between">
          <div className="flex items-center mb-4">
            <p className="text-3xl Shop px-5">{style}</p>
            {showing && (
              <p className="lato-light">
                Showing {(currentPage - 1) * PRODUCTS_PER_PAGE + 1}-
                {Math.min(
                  currentPage * PRODUCTS_PER_PAGE,
                  productsByStyle.length
                )}{" "}
                of {productsByStyle.length} products
              </p>
            )}
          </div>
          <div className="lg:hidden   rounded-2xl  pr-4">
            <DrawerRoot key={"start"} placement={"bottom"} size={"xl"}>
              <DrawerBackdrop />
              <DrawerTrigger asChild>
                <Button variant="outline" size="md">
                  <FaFilter className="text-4xl lg:hidden  " />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="text-3xl lato-regular">
                    Filters
                  </DrawerTitle>
                </DrawerHeader>
                <DrawerBody p={5}>
                  <div className="flex flex-col gap-2">
                    <div>
                      <hr />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between">
                        <div>
                          <p className="lato-light text-xl">T-Shirts</p>
                        </div>
                        <div>
                          <BiRightArrow onClick={() => filter("T-SHIRT")} />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="lato-light text-xl">Pajamas</p>
                        </div>
                        <div>
                          <BiRightArrow onClick={() => filter("PAJAMAS")} />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="lato-light text-xl">Hoodies</p>
                        </div>
                        <div>
                          <BiRightArrow onClick={() => filter("HOODIE")} />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="lato-light text-xl">Shirts</p>
                        </div>
                        <div>
                          <BiRightArrow onClick={() => filter("SHIRT")} />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="lato-light text-xl">Trousers</p>
                        </div>
                        <div>
                          <BiRightArrow onClick={() => filter("TROUSERS")} />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="lato-light text-xl">Jeans</p>
                        </div>
                        <div>
                          <BiRightArrow onClick={() => filter("JEANS")} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <hr />
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                      <div className="text-3xl">Price</div>
                      <div className="ml-10">
                        <Slider
                          colorPalette="gray"
                          variant="solid"
                          width="250px"
                          // max={`${priceTwo}`}
                          max={`1000`}
                          defaultValue={[0, priceTwo]}
                          onValueChange={(e) =>
                            setPriceTwo(e.value[1], setpriceOne(e.value[0]))
                          }
                          onValueChangeEnd={(e) => (
                            setStartPrice(e.value[0]), setEndPrice(e.value[1])
                          )}
                          marks={[
                            {
                              value: [priceOne],
                              label: [`$${priceOne}`],
                            },
                            {
                              value: [priceTwo],
                              label: [`$${priceTwo}`],
                            },
                          ]}
                        />
                      </div>
                      <div className="mt-[33px]">
                        <hr />
                      </div>
                    </div>
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
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4">
          {displayedProducts.map((product) => (
            <Link key={product.id} to={"/details"} state={{ id: product.id }}>
              <Card product={product} />
            </Link>
          ))}
        </div>
        {displayedProducts.length === 0 && <p>NO PRODUCTS FOUND</p>}
        {/* Pagination */}
        {totalPages > 1 && (
          <PaginationRoot
            count={totalPages * 9}
            pageSize={9}
            defaultPage={1}
            onPageChange={(e) => setCurrentPage(e.page)}
          >
            <HStack justify="center" mt={4}>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </HStack>
          </PaginationRoot>
        )}
      </div>
    </div>
  );
};

export default Showcase;
