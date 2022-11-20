import {
  Add,
  Close,
  ShoppingCart,
  Remove,
  Delete,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import {
  Paper,
  Box,
  Stack,
  Unstable_Grid2 as Grid,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, minusFromCart, removeItmeCart } from "../redux/actionCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const {
    cart: { cartLoading, cartData, cartError },
  } = useSelector((last) => last);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    let result = 0;
    cartData.forEach((item) => {
      result += item.quantity * item.price;
    });
    setTotalPrice(result);
  }, [cartData]);
  const submitCart = () => {
    localStorage.getItem("address")
      ? navigate("/checkout")
      : navigate("/address");
  };
  switch (true) {
    case Boolean(!cartData.length):
      return (
        <Box className="flex justify-center items-center  text-red-600 font-bold h-96 gap-2">
          <ShoppingCart fontSize="large" />
          <Typography variant="h4" component="span">
            Cart is empty
          </Typography>
        </Box>
      );

    default:
      return (
        <>
          <Box
            className="overflow-auto  p-1"
            sx={{ maxHeight: { xs: 350, md: 400 } }}
          >
            <Paper
              elevation={4}
              className=""
              sx={{ display: { xs: "none", md: "block", borderRadius: 0 } }}
            >
              <Grid
                container
                gap={1}
                padding={1}
                alignItems="center"
                className="text-center font-bold text-xl capitalize"
              >
                <Grid sx={{ width: { xs: 200, md: 170 } }}>Image</Grid>
                <Grid md={3}>Name</Grid>
                <Grid md>Price</Grid>
                <Grid md={3}>count</Grid>
                <Grid md>SubTotal</Grid>
              </Grid>
            </Paper>
            {cartData.map((item, index) => (
              <Paper
                key={item._id}
                elevation={4}
                sx={{
                  borderRadius: 0,
                  textAlign: { md: "left", md: "center" },
                }}
                className="overflow-hidden p-2 md:p-0 relative"
              >
                <Grid
                  container
                  padding={1}
                  sx={{
                    alignItems: { xs: "start", md: "center" },
                    gap: { xs: 1 },
                  }}
                >
                  <Grid sx={{ width: { xs: 200, md: 170 }, height: 100 }}>
                    <Box className="w-full h-full flex items-center">
                      <img
                        src={item.image}
                        alt="11"
                        className="max-h-full max-w-full"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "https://mui.com/static/images/cards/contemplative-reptile.jpg";
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={6} md={3}>
                    <Stack
                      direction="row"
                      gap={1}
                      alignItems="center"
                      sx={{ justifyContent: { sm: "start", md: "center" } }}
                      className="capitalize"
                    >
                      <Typography
                        variant="span"
                        className="font-bold border-r pr-2 text-lg"
                        sx={{ display: { xs: "block", sm: "none" } }}
                      >
                        Name
                      </Typography>
                      <Typography variant="span" className="text-lg">
                        {item.name}
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid xs={12} sm={3} md sx={{ alignSelf: "center" }}>
                    <Stack
                      direction="row"
                      gap={1}
                      alignItems="center"
                      sx={{ justifyContent: { sm: "start", md: "center" } }}
                      className="capitalize"
                    >
                      <Typography
                        variant="span"
                        className="font-bold border-r pr-2 text-lg"
                        sx={{ display: { xs: "block", md: "none" } }}
                      >
                        Price
                      </Typography>
                      <Typography variant="span" className="text-lg ">
                        {item.price.toFixed(2)}$
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={12} sm={4} md={3}>
                    <Box
                      className="flex justify-center"
                      sx={{ justifyContent: { xs: "start", sm: "center" } }}
                    >
                      <Paper
                        elevation={4}
                        className="flex justify-between items-center overflow-hidden"
                      >
                        <Button
                          size="small"
                          disableElevation
                          disableRipple
                          disableFocusRipple
                          sx={{ borderRadius: "0", minWidth: 40 }}
                          onClick={() => dispatch(minusFromCart(item))}
                        >
                          {item.quantity == 1 ? (
                            <Delete sx={{ color: "red" }} />
                          ) : (
                            <Remove sx={{ color: "red" }} />
                          )}
                        </Button>
                        <Stack>
                          <Typography
                            variant="span"
                            className="w-12 min-h-full font-bold text-center text-lg"
                          >
                            {item.quantity}
                          </Typography>
                          {item.quantity == item.countInStock && (
                            <Typography
                              variant="span"
                              className="w-12 min-h-full font-bold text-center text-red-500"
                            >
                              max
                            </Typography>
                          )}
                        </Stack>
                        <Button
                          disableElevation
                          disableRipple
                          disableFocusRipple
                          sx={{ borderRadius: "0", minWidth: 40 }}
                          onClick={() => dispatch(addToCart(item))}
                        >
                          <Add fontSize="medium" />
                        </Button>
                      </Paper>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={4} md sx={{ alignSelf: "center" }}>
                    <Stack
                      direction="row"
                      gap={1}
                      alignItems="center"
                      sx={{ justifyContent: { sm: "start", md: "center" } }}
                      className="capitalize"
                    >
                      <Typography
                        variant="span"
                        className="font-bold border-r pr-2 text-lg"
                        sx={{ display: { xs: "block", md: "none" } }}
                      >
                        SubTotal
                      </Typography>
                      <Typography
                        variant="span"
                        className="text-lg text-red-500"
                      >
                        {(item.price * item.quantity).toFixed(2)}$
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
                <Box
                  className="absolute top-1 right-1"
                  onClick={() => dispatch(removeItmeCart(index))}
                >
                  <IconButton aria-label="delete" color="error" size="small">
                    <Close fontSize="small" />
                  </IconButton>
                </Box>
              </Paper>
            ))}
          </Box>
          <Box className="flex justify-end mt-2 px-1">
            <Paper
              elevation={3}
              className="flex w-72 gap-2 items-center p-2 font-bold "
            >
              <Typography
                variant="h6"
                component="span"
                className="border-r pr-2"
              >
                Total Price
              </Typography>
              <Typography
                variant="span"
                className="flex-1 text-xl text-red-500"
              >
                {totalPrice.toFixed(2)}$
              </Typography>
            </Paper>
          </Box>
          <Box className="flex justify-center mt-10">
            <Button
              size="large"
              variant="contained"
              startIcon={<ShoppingCartCheckout />}
              onClick={submitCart}
            >
              Checkout
            </Button>
          </Box>
        </>
      );
  }
};

export default Cart;
