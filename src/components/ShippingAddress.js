import {
  AccountCircle,
  Email,
  Key,
  LocalShipping,
  PhoneAndroid,
  Portrait,
} from "@mui/icons-material";

import {
  Box,
  Divider,
  InputAdornment,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomField, HeaderLogin } from "./Login";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Toast } from "../redux/actionCart";
import { LoadingButton } from "@mui/lab";
import { createUser } from "../redux/actionUser";
import { textAlign } from "@mui/system";

const ShippingAddress = () => {
  const [status, setStatus] = useState(false);
  const {
    user: { userLoading, userData, userError },
  } = useSelector((last) => last);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = (values) => {
    let errors = {};
   
    if (!/^[0][9][0-9]{9}$/.test(values.phone)) {
      errors.phone = `The mobile field must be number(11character) and started by
      09 example 09123456789`;
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      postalCode: "",
      phone: "",
    },
    onSubmit: (values) => {
      dispatch(createUser(values));
      setStatus(true);
    },
    validate,
  });
  useEffect(() => {
    if (status && userData.IsSuccessSignup) {
      navigate("/login");
    }
  }, [userData, status]);

  switch (true) {
    default:
      return (
        <Box
          className="flex justify-center items-center font-bold text-2xl"
          sx={{ fontWeight: "700" }}
        >
          <Paper
            className=" w-full md:w-150 overflow-hidden"
            sx={{ borderRadius: "1.8rem" }}
            elevation={4}
          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                overflow: "hidden",
                padding: 2.5,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                }}
                variant="h5"
              >
                Shipping Address
              </Typography>
            </Box>
            <Box
              component="form"
             
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <Box  className="flex flex-col gap-4 p-4">
              <CustomField
                error={formik.errors.username && formik.touched.username}
                helperText={
                  formik.errors.username && formik.touched.username
                    ? formik.errors.username
                    : ""
                }
                label="Username"
                name="username"
                id="username"
                autoComplete="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                size="small"
                fullWidth
              />
              <CustomField
                error={formik.errors.email && formik.touched.email}
                helperText={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : ""
                }
                label="Email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                size="small"
                fullWidth
              />

              <CustomField
                error={formik.errors.password && formik.touched.password}
                helperText={
                  formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : ""
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Key />
                    </InputAdornment>
                  ),
                }}
                label="Password"
                name="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                size="small"
                fullWidth
                type="password"
              />
              <CustomField
                error={
                  formik.errors.confrimPassword &&
                  formik.touched.confrimPassword
                }
                helperText={
                  formik.errors.confrimPassword &&
                  formik.touched.confrimPassword
                    ? formik.errors.confrimPassword
                    : ""
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Key />
                    </InputAdornment>
                  ),
                }}
                label="Confrim Password"
                name="confrimPassword"
                id="confrimPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                size="small"
                fullWidth
                type="password"
              />
              <CustomField
                error={formik.errors.mobile && formik.touched.mobile}
                helperText={
                  formik.errors.mobile && formik.touched.mobile
                    ? formik.errors.mobile
                    : ""
                }
                label="Mobile"
                name="mobile"
                id="mobile"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneAndroid />
                    </InputAdornment>
                  ),
                }}
                size="small"
                fullWidth
              />
              </Box>
              <Divider />
              <Box className="text-center p-3">
                <LoadingButton
                  loading={userLoading}
                  loadingPosition="start"
                  sx={{ minWidth: 120 }}
                  variant="contained"
                  startIcon={<Portrait />}
                  type="submit"
                >
                  Signup
                </LoadingButton>
              </Box>
            </Box>
          </Paper>
        </Box>
      );
  }
};

export default ShippingAddress;
