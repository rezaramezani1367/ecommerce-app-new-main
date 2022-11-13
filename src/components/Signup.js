import { LoginOutlined, Portrait } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Paper, Tab, Tabs, TextField } from "@mui/material";
import React from "react";
import { CustomField,HeaderLogin } from "./Login";

const Signup = () => {
  return (
    <Box
      className="flex justify-center items-center font-bold text-2xl"
      sx={{ fontWeight: "700" }}
    >
      <Paper className=" w-full md:w-150 " elevation={4}>
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
            size="small"
            fullWidth
          />
          <CustomField
            label="Email"
            id="outlined-username-small"
            size="small"
            fullWidth
          />
          <CustomField
            label="Password"
            id="outlined-username-small"
            size="small"
            fullWidth
          />
          <CustomField
            label="Mobile"
            id="outlined-username-small"
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
