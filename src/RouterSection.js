import { Box,Container } from "@mui/system";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";

const RouterSection = () => {
  return (
    <Container className='py-4'>
      <Routes>
        <Route path="/">
          <Route index element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="//signup" element={<Signup />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default RouterSection;
