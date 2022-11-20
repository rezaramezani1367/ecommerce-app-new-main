import { Box,Container } from "@mui/system";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import ChangeProfile from "./components/ChangeProfile";
import ChangePassword from "./components/ChangePassword";
import UploadAvatar from "./components/UploadAvatar";
import ShippingAddress from "./components/ShippingAddress";

const RouterSection = () => {
  return (
    <Container className='py-4'>
      <Routes>
        <Route path="/">
          <Route index element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/change" element={<ChangeProfile />} />
          <Route path="/profile/password" element={<ChangePassword />} />
          <Route path="/profile/avatar" element={<UploadAvatar />} />
          <Route path="/address" element={<ShippingAddress />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default RouterSection;
