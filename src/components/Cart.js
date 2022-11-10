import { Add, Close, Delete, Remove } from "@mui/icons-material";
import {
  Paper,
  Box,
  Stack,
  Unstable_Grid2 as Grid,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <div className=" bg-gray-100 rounded-lg grid  grid-cols-new4  ">
      <div className="rounded-full ">
        <img
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt={"item.name"}
        />
      </div>
      <p>
        Hello <span className="block ">123</span>
      </p>
      . . .
      <p>
        Hello <span className="block ">123</span>
      </p>
    </div>
  );
};

export default Cart;
