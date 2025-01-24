import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Homepage from "./pages/Home/Homepage";
import Login from "./pages/Login/Login";
import Navbar from "./pages/Login/Navbar";
import Register from "./pages/Login/Register";
import NotFound from "./pages/404 Notfound/NotFound";
import { Toaster } from "./components/ui/toaster";
import Dashboard from "./pages/dashboard/dashboard";
import Create from "./pages/dashboard/Create";
import Showcase from "./pages/Showcase/Showcase";
import Productdetails from "./pages/Product/ProductDetails";
import Cart from "./pages/Cart/Cart";
const App = () => {
  return (
    <Box
      minH={"100vh"}
      bg={useColorModeValue("gray.800", "gray.100")}
      color={useColorModeValue("gray.100", "gray.900")}
      overflowY={"hidden"}
    >
      {["/user", "/product", "/Showcase", "/details", "/Cart"].includes(
        useLocation().pathname
      ) && <Header />}
      {["/login", "/register"].includes(useLocation().pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Productdetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/Showcase" element={<Showcase />} />
        <Route path="/details" element={<Productdetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <>
              <Header /> <NotFound />
            </>
          }
        />
      </Routes>
      <Toaster />
      <Footer />
    </Box>
  );
};

export default App;
