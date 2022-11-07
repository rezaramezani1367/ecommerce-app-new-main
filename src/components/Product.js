import { Stack, Rating, Button, styled, Box, Paper } from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../redux/action";
import Grid from "@mui/material/Unstable_Grid2";
import { StarOutline, Add, Remove } from "@mui/icons-material";

const Product = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  const {
    products: { productLoading, productData, productError },
  } = useSelector((last) => last);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  // console.log({ productLoading, productData, productError });
  switch (true) {
    case productLoading:
      return <div>loading...</div>;
    case Boolean(productError):
      return <div>{productError}</div>;

    default:
      return (
        <>
          {productData.map((item, index) => (
            <Grid
              container
              spacing={2}
              key={item._id}
              className="items-start justify-center"
            >
              <Grid rowSpacing={0} xs={12} md={6} className="relative">
                <img
                  src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  alt={item.name}
                  className="border-2 rounded-md border-slate-400 w-full"
                />
                <Box className="absolute bottom-8 left-5 px-4 text-yellow-500 z-10">
                  <Rating
                    size="small"
                    name="text-feedback"
                    defaultValue={item.rating}
                    readOnly
                    precision={0.25}
                    sx={{
                      fontSize: "1rem",
                    }}
                    emptyIcon={
                      <StarOutline
                        className="text-white"
                        sx={{
                          fontSize: "1rem",
                        }}
                      />
                    }
                  />
                </Box>
              </Grid>
              <Grid
                container
                xs={12}
                md={6}
                padding={2.5}
                rowSpacing={2}
                className="items-start justify-center"
              >
                <Grid
                  xs={4}
                  className="font-bold border border-r-0 border-b-0 capitalize"
                >
                  Name
                </Grid>
                <Grid xs={8} className="border border-b-0 capitalize">
                  {item.name}
                </Grid>
                <Grid
                  xs={4}
                  className="font-bold border border-r-0 border-b-0 capitalize"
                >
                  Category
                </Grid>
                <Grid xs={8} className="border border-b-0 capitalize">
                  {item.category}
                </Grid>
                <Grid
                  xs={4}
                  className="font-bold border border-r-0 border-b-0 capitalize"
                >
                  color
                </Grid>
                <Grid xs={8} className="border border-b-0 capitalize">
                  {item.color}
                </Grid>
                <Grid
                  xs={4}
                  className="font-bold border border-r-0 border-b-0 capitalize"
                >
                  brand
                </Grid>
                <Grid xs={8} className="border border-b-0 capitalize">
                  {item.brand}
                </Grid>
                <Grid
                  xs={4}
                  className="font-bold border border-r-0 border-b-0 capitalize"
                >
                  count In Stock
                </Grid>
                <Grid xs={8} className="border border-b-0 capitalize">
                  {item.countInStock}
                </Grid>
                <Grid xs={4} className="font-bold border border-r-0 capitalize">
                  price
                </Grid>
                <Grid xs={8} className="border capitalize text-red-500">
                  {item.price.toFixed(2)}$
                </Grid>
                <Stack
                  direction="row"
                  className="mt-5 w-full gap-2 items-center"
                >
                  <Paper
                    elevation={4}
                    className="flex justify-between items-center overflow-hidden"
                  >
                    <Button
                      size="large"
                      disableElevation
                      disableRipple
                      disableFocusRipple
                    >
                      <Remove sx={{ color: "red" }} />
                    </Button>
                    <span className="w-24 font-bold text-center text-xl">
                      12 |max
                    </span>
                    <Button
                      size="large"
                      disableElevation
                      disableRipple
                      disableFocusRipple
                    >
                      <Add />
                    </Button>
                  </Paper>
                  <Box >
                    <Button
                      variant="outlined"
                      color="secondary"
                      className="capitalize"
                      onClick={()=>navigate('/cart')}
                    >
                      view Cart
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          ))}
        </>
      );
  }
};

export default Product;
