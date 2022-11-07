import {
  Stack,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  List,
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/action";
import Grid from "@mui/material/Unstable_Grid2";


const Product = () => {
  const { id } = useParams();
  const {
    products: { productLoading, productData, productError },
  } = useSelector((last) => last);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  console.log({ productLoading, productData, productError });
  return (
    <>
      {productData.map((item, index) => (
        <Grid container key={item._id} spacing={4}  >
          <Grid xs={12} md={6}>
            <img
              src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt={item.name}
              className="border-2 rounded-md border-slate-400 w-full"
            />
          </Grid>
          <Grid xs={12} md={6} className="p-4">
           
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Product;
