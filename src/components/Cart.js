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
    <Box className=" flex w-full flex-col">
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
          <Grid sx={{ width: { xs: 200, md:170 } }}>Image</Grid>
          <Grid  md={3}>
            Name
          </Grid>
          <Grid md>Price</Grid>
          <Grid  md={3}>
            count
          </Grid>
          <Grid md>SubTotal</Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={4}
        sx={{ borderRadius: 0, textAlign: { md: "left", md: "center" } }}
        className="overflow-hidden p-2 md:p-0 relative"
      >
        <Grid
          container
          padding={1}
          sx={{ alignItems: { xs: "start", md: "center" }, gap: { xs: 1 } }}
        >
          <Grid
            sx={{ width: { xs: 200, md: 170 }, height: 100 }}
            
          >
           <Box className="w-full h-full flex items-center">
           <img
              src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
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
                Sony
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
                1000.2$
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
                  disableElevation
                  disableRipple
                  disableFocusRipple
                  sx={{ borderRadius: "0", minWidth: 40 }}
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
              <Typography variant="span" className="text-lg text-red-500">
                1000.2$
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Box className="absolute top-1 right-1">
          <IconButton aria-label="delete" color="error" size="small">
            <Close fontSize="small" />
          </IconButton>
        </Box>
      </Paper>
     

     
    </Box>
  );
};

export default Cart;
