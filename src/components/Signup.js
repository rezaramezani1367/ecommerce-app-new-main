import { AccountCircle, Email, Key, LoginOutlined, PhoneAndroid, Portrait } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import React from "react";
import { CustomField, HeaderLogin } from "./Login";

const Signup = () => {
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
        >
          <CustomField
            helperText="Please enter your name"
            label="Username"
            id="outlined-username-small"
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
            label="Email"
            id="outlined-username-small"
            // defaultValue="Small"
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key />
                </InputAdornment>
              ),
            }}
            label="Password"
            id="outlined-username-small"
            // defaultValue="Small"
            size="small"
            fullWidth
            type="password"
            />
          <CustomField
            label="Mobile"
            id="outlined-username-small"
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
