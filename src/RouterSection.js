import { Box,Container } from "@mui/system";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Products from "./components/Products";
import Cart from "./components/Cart";

const RouterSection = () => {
  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/">
          <Route index element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default RouterSection;
