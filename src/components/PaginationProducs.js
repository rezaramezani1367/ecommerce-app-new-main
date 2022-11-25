import { Box, Pagination, PaginationItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getPaginateProducts } from "../redux/actionProducts";
const pageSize = 9;
const PaginationProducs = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const [paginationData, setPaginationData] = useState({
    count: 0,
    from: (page - 1) * pageSize,
    to: page * pageSize,
  });
  const {
    products: { productLoading, productData, productError },
  } = useSelector((last) => last);
  const dispatch = useDispatch();
  useEffect(() => {
    setPaginationData({ ...paginationData, count: productData.length });
    dispatch(getPaginateProducts(paginationData.from, paginationData.to));
  }, [paginationData.from]);
  const handlePageChange = (e, page) => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
    const from = (page - 1) * pageSize;
    const to = page * pageSize;
    setPaginationData({ ...paginationData, from, to });
  };

  return (
    <Box display="flex" justifyContent="center" marginY={2}>
      <Pagination
        siblingCount={1}
        boundaryCount={1}
        page={page}
        count={Math.ceil(paginationData.count / pageSize)}
        variant="outlined"
        color="secondary"
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${item.page === 1 ? "" : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </Box>
  );
};

export default PaginationProducs;
