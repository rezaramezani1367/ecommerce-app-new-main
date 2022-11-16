import { HeaderProfile } from "./Profile";
import { Box, InputAdornment, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomField, HeaderLogin } from "./Login";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Toast } from "../redux/actionCart";
import { LoadingButton } from "@mui/lab";
import { createUser } from "../redux/actionUser";
import { Key, Person } from "@mui/icons-material";

const ChangePassword = () => {
  const [status, setStatus] = useState(false);
  const {
    user: { userLoading, userData, userError },
  } = useSelector((last) => last);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = (values) => {
    let errors = {};

    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(
        values.oldPassword
      )
    ) {
      errors.oldPassword = `password must be at least 8 characters, at least one
      uppercase letter, one lowercase letter, one number and one
      special character`;
    }
    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(
        values.newPassword
      )
    ) {
      errors.newPassword = `new password must be at least 8 characters, at least one
      uppercase letter, one lowercase letter, one number and one
      special character`;
    }
    if (!(values.newPassword === values.confrimNewPassword && values.confrimNewPassword)) {
      errors.confrimNewPassword = "new Password not matched";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confrimNewPassword: "",
    },
    onSubmit: (values) => {
      dispatch(createUser(values));
      setStatus(true);
    },
    validate,
    onReset: () => {
      return {
        oldPassword: "",
        newPassword: "",
        confrimNewPassword: "",
      };
    },
  });
  useEffect(() => {
    if (status && userError.length) {
      Toast.fire({
        icon: "error",
        title: userError,
      });
    }
    if (status && Object.keys(userData).length) {
      Toast.fire({
        icon: "success",
        title: `${formik.values.username} created successfully`,
      });
      navigate("/login");
    }
  }, [userError, userData]);
  const mediumViewport = useMediaQuery("(min-width:700px)");
  return (
    <HeaderProfile value="3">
      <Box component="form"  onSubmit={formik.handleSubmit}>
        <Box
          padding={3}
          sx={{
            display: "grid",
            flexGrow: 1,
            gap: 3,
            gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
            
          }}
        >
          <CustomField
            error={formik.errors.oldPassword && formik.touched.oldPassword}
            helperText={
              formik.errors.oldPassword && formik.touched.oldPassword
                ? formik.errors.oldPassword
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key />
                </InputAdornment>
              ),
            }}
            label="Old Password"
            name="oldPassword"
            id="oldPassword"
            autoComplete="current-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size="small"
            fullWidth
            type="password"
          />
          <CustomField
            error={
              formik.errors.newPassword && formik.touched.newPassword
            }
            helperText={
              formik.errors.newPassword && formik.touched.newPassword
                ? formik.errors.newPassword
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key />
                </InputAdornment>
              ),
            }}
            autoComplete='new-password'
            label="New Password"
            name="newPassword"
            id="newPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size="small"
            fullWidth
            type="password"
          />
          <CustomField
            error={
              formik.errors.confrimNewPassword && formik.touched.confrimNewPassword
            }
            helperText={
              formik.errors.confrimNewPassword && formik.touched.confrimNewPassword
                ? formik.errors.confrimNewPassword
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key />
                </InputAdornment>
              ),
            }}
            autoComplete='new-password'
            label="Confrim New Password"
            name="confrimNewPassword"
            id="confrimNewPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size="small"
            fullWidth
            type="password"
          />
        </Box>
        <Box className="text-center mt-3">
          <LoadingButton
            loading={userLoading}
            loadingPosition="start"
            sx={{ minWidth: 120 }}
            variant="contained"
            startIcon={<Key />}
            type="submit"
          >
            change password
          </LoadingButton>
        </Box>
      </Box>
    </HeaderProfile>
  );
};

export default ChangePassword;
