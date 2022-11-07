import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/action";
import { Stack } from "@mui/system";
import { StarOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
      return <div>loading...</div>;
    case Boolean(productError):
      return <div>{productError}</div>;

    default:
      return (
        <>
          <Grid container spacing={2} xs={12}>
            {productData.map((item, index) => (
              <Grid xs={12} md={6} lg={4} key={item._id}>
                <Card onClick={() => navigate(`/product/${item._id}`)}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent className="relative ">
                      <Stack
                        direction="row"
                        alignItems="center"
                        className="absolute -top-8 left-0 w-full px-4 text-yellow-500"
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
                              className="text-white"
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
                          className="font-bold text-2xl mr-2 uppercase text-red-600"
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
