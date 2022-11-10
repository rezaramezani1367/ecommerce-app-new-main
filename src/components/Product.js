import { Stack, Rating, Button, Box, Paper, Typography } from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../redux/action";
import Grid from "@mui/material/Unstable_Grid2";
import { StarOutline, Add, Remove } from "@mui/icons-material";

const Product = () => {
  const navigate = useNavigate();
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
              <Grid rowSpacing={0} xs={12} md={6} className="relative ">
                <Box
                  className="w-full p-3 flex justify-center items-center border bg-white shadow-inner"
                  sx={{ height: 350 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src =
                        "https://mui.com/static/images/cards/contemplative-reptile.jpg";
                    }}
                  />
                </Box>

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
                        className="text-slate-400"
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
                className="h-full "
              >
                <Grid
                  xs={3}
                  className="font-bold border border-r-0 border-b-0 capitalize"
                >
                  Name
                </Grid>
                <Grid xs={9} className="border border-b-0 capitalize">
                  {item.name}
                </Grid>
                <Grid
                  xs={3}
                  className="font-bold border border-r-0 border-b-0 capitalize"
                >
                  Category
                </Grid>
                <Grid xs={9} className="border border-b-0 capitalize">
                  {item.category}
                </Grid>
                <Grid
                  xs={3}
                  className="font-bold border border-r-0 border-b-0 capitalize"
                >
                  color
                </Grid>
                <Grid xs={9} className="border border-b-0 capitalize">
                  {item.color}
                </Grid>
                <Grid
                  xs={3}
                  className="font-bold border border-r-0 border-b-0 capitalize"
                >
                  brand
                </Grid>
                <Grid xs={9} className="border border-b-0 capitalize">
                  {item.brand}
                </Grid>
                <Grid
                  xs={3}
                  className="font-bold border border-r-0 border-b-0  capitalize"
                >
                  count In Stock
                </Grid>
                <Grid xs={9} className="border border-b-0  capitalize">
                  {item.countInStock}
                </Grid>
                <Grid xs={3} className="font-bold border border-r-0 capitalize">
                  price
                </Grid>
                <Grid xs={9} className="border capitalize text-red-500">
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
                     sx={{ borderRadius: "0",minWidth:50}}
                    >
                      <Remove sx={{ color: "red" }} />
                    </Button>
                    <Stack>
                      <Typography
                        variant="span"
                        className="w-12 min-h-full font-bold text-center text-lg"
                      >
                        12
                      </Typography>
                      {/* <Typography
                        variant="span"
                        className="w-12 min-h-full font-bold text-center text-red-500"
                      >
                        max
                      </Typography> */}
                    </Stack>
                    <Button
                      size="large"
                      disableElevation
                      disableRipple
                      disableFocusRipple
                     sx={{ borderRadius: "0",minWidth:50}}
                    >
                      <Add />
                    </Button>
                  </Paper>
                  <Box>
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      className="capitalize"
                      onClick={() => navigate("/cart")}
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
