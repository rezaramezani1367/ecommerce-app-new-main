import {
  AccountCircle,
  Email,
  Key,
  PhoneAndroid,
  Portrait,
} from "@mui/icons-material";

import { Box, Button, InputAdornment, Paper } from "@mui/material";
import React from "react";
import { CustomField, HeaderLogin } from "./Login";
import { useFormik } from "formik";

const Signup = () => {
  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Please enter your username";
    }
    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(
        values.password
      )
    ) {
      errors.password = ` The password field has minimum 8 characters, at least one
      uppercase letter, one lowercase letter, one number and one
      special character`;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Please enter your valid email";
    }
    if (!/^[0][9][0-9]{9}$/.test(values.mobile)) {
      errors.mobile = `The mobile field must be number(11character) and started by
      09 example 09123456789`;
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      mobile: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
    onReset: (values) => {
      return {
        username: "",
        password: "",
        email: "",
        mobile: "",
      };
    },
  });
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
        <HeaderLogin value="2" />
        <Box
          component="form"
          className="flex flex-col gap-4 p-4"
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
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
          <Box className="text-center">
            <Button
              sx={{ minWidth: 120 }}
              variant="contained"
              startIcon={<Portrait />}
              type="submit"
            >
              Signup
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;
