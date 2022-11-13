import { LoginOutlined,Login as LoginIcon, Portrait, Key, Email } from "@mui/icons-material";

import {
  Box,
  Button,
  InputAdornment,
  Paper,
  styled,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const CustomField = styled(TextField)(() => ({
  "& label": {
    fontWeight: 500,
    top: 0,
    left: 0,
  },
  "& label.Mui-focused": {
    top: 0,
    left: 0,
  },
  "& label.MuiFormLabel-filled": {
    top: 0,
    left: 0,
  },
  "& input": {
    padding: "0.75rem 0.5rem",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#717D7E",
      borderRadius: "3rem",
    }
  },
}));
export const HeaderLogin = ({ value }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider",overflow:'hidden' }}>
      <Tabs value={value} aria-label="basic tabs" sx={{bgcolor: ''}}>
        <Tab icon={<LoginIcon />} iconPosition='start' label="Login" value="1" onClick={() => navigate("/login")} />
        <Tab icon={<Portrait />}  iconPosition='start' label="Signup" value="2" onClick={() => navigate("/signup")} />
      </Tabs>
    </Box>
  );
};
const Login = () => {
  return (
    <>
      <Box className="flex justify-center items-center">
        <Paper
          className=" w-full md:w-150 overflow-hidden"
          sx={{ borderRadius: "1.8rem" }}
          elevation={4}
        >
          <HeaderLogin value="1" />
          <Box
            component="form"
            className="flex flex-col gap-4 p-4"
            noValidate
            autoComplete="off"
          >
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
            startIcon={<LoginIcon />}
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

            <Box className="text-center">
              <Button
                sx={{ minWidth: 120 }}
                variant="contained"
                startIcon={<LoginOutlined />}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
