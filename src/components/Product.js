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
  ListItemIcon,
} from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/action";
import Grid from "@mui/material/Unstable_Grid2";
import { Send, Album, StarOutline } from "@mui/icons-material";
import { Box } from "@mui/system";

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
  switch (true) {
    case productLoading:
      return <div>loading...</div>;
    case Boolean(productError):
      return <div>{productError}</div>;

    default:
      return (
        <>
          {productData.map((item, index) => (
            <Grid container key={item._id} spacing={4}>
              <Grid xs={12} md={6} className="relative">
                <img
                  src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  alt={item.name}
                  className="border-2 rounded-md border-slate-400 w-full"
                />
                <Box className="absolute bottom-5 left-5 w-full px-4 text-yellow-500 z-10">
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
              <Grid xs={12} md={6} className="p-4">
                <List
                  sx={{
                    bgcolor: "background.paper",
                  }}
                  className=""
                >
                  {/* Name */}
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <Album />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline font-bold text-xl  pr-2 "
                          >
                            Name:
                          </Typography>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline text-lg  uppercase"
                          >
                            {item.name}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  {/* category */}
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <Album />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline font-bold text-xl  pr-2 "
                          >
                            Category:
                          </Typography>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline text-lg  capitalize"
                          >
                            {item.category}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <Album />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline font-bold text-xl  pr-2 "
                          >
                            Price:
                          </Typography>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline text-lg "
                          >
                            {item.price.toFixed(2)}$
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <Album />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline font-bold text-xl  pr-2 "
                          >
                            Brand:
                          </Typography>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline text-lg  capitalize"
                          >
                            {item.brand}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <Album />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline font-bold text-xl  pr-2 capitalize"
                          >
                            count In Stock:
                          </Typography>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline text-lg  capitalize"
                          >
                            {item.countInStock}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <Album />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline font-bold text-xl  pr-2 capitalize"
                          >
                            color:
                          </Typography>
                          <Typography
                            variant="span"
                            color="text.primary"
                            className="inline text-lg  capitalize"
                          >
                            {item.color}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          ))}
        </>
      );
  }
};

export default Product;
