import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Container,
} from "@mui/material";

import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actionProducts";
import { Stack } from "@mui/system";
import { StarOutline, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

const Products = () => {
  const navigate = useNavigate();
  const {
    products: { productLoading, productData, productError },
  } = useSelector((last) => last);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  switch (true) {
    case productLoading:
      return <Loading />;
    case Boolean(productError):
      return <ErrorPage error={productError}/>;

    default:
      return (
        <>
          <Grid container spacing={3}>
            {productData.map((item, index) => (
              <Grid xs={12} md={6} lg={4} key={item._id} >
                <Card
                sx={{ border: 1, borderColor: "divider" }}
                  onClick={() => navigate(`/product/${item._id}`)}
                  elevation={3}
                >
                  <CardActionArea>
                    <Box className="h-80 w-full md:h-64 p-3 flex justify-center items-center" sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "https://mui.com/static/images/cards/contemplative-reptile.jpg";
                        }}
                        className="max-h-full max-w-full"
                      />
                    </Box>
                    <CardContent className="relative ">
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        className="absolute -top-7 left-0 w-full px-4 text-yellow-500"
                      >
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
                      </Stack>
                      <Stack direction="row" className="mb-4">
                        <Typography
                          variant="span"
                          className="font-bold text-2xl mr-2 capitalize text-red-600 line-clamp-1"
                        >
                          {item.name}
                        </Typography>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between">
                        <Stack
                          direction="row"
                          gap={1}
                          color="text.secondary"
                          className="capitalize"
                        >
                          <Typography
                            variant="span"
                            className="font-bold border-r pr-2"
                          >
                            Category
                          </Typography>
                          <Typography variant="span">
                            {item.category}
                          </Typography>
                        </Stack>

                        <Stack
                          direction="row"
                          gap={1}
                          color="text.secondary"
                          className="capitalize"
                        >
                          <Typography
                            variant="span"
                            className="font-bold border-r pr-2"
                          >
                            Price
                          </Typography>
                          <Typography variant="span">
                            {item.price.toFixed(2)}$
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      );
  }
};

export default Products;
