import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actionProducts";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import PaginationProducs from "./PaginationProducs";
import ProducsItem from "./ProducsItem";

const Products = () => {
  const {
    products: { productLoading, productData, productError, paginationData },
  } = useSelector((last) => last);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  switch (true) {
    case productLoading:
      return <Loading />;
    case Boolean(productError):
      return <ErrorPage error={productError} />;

    default:
      return (
        <>
          <Grid container spacing={3}>
            {paginationData.map((item, index) => (
              <Grid xs={12} md={6} lg={4} key={item._id}>
                <ProducsItem item={item} />
              </Grid>
            ))}
          </Grid>
          <PaginationProducs />
        </>
      );
  }
};

export default Products;
