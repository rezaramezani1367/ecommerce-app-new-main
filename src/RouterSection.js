import { Box } from "@mui/system";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Products from "./components/Products";

const RouterSection = () => {
  return (
    <Box className='p-5'>
      <Routes>
        <Route path="/">
          <Route index element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default RouterSection;
