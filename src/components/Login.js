import { LoginOutlined } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Paper,
  styled,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

export const CustomField = styled(TextField)(() => ({
  "& label": {
    fontWeight: 500,
    top: 3,
    left: 10,
  },
  "& label.Mui-focused": {
    top: 0,
    left: 0,
  },
  "& input": {
    padding: "0.75rem 2rem",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#717D7E",
      borderRadius: "3rem",
    },
    "&:hover fieldset": {
      // borderColor: "blue",
    },
  },
}));
export const HeaderLogin = ({ value }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
      <Tabs value={value} aria-label="basic tabs">
        <Tab label="Login" value="1" onClick={()=>navigate('/login')} />
        <Tab label="Signup" value="2" onClick={()=>navigate('/signup')} />
      </Tabs>
    </Box>
  );
};
const Login = () => {


  return (
    <>
      <Box
        className="flex justify-center items-center font-bold text-2xl "
        sx={{ fontWeight: "700" }}
      >
        <Paper className=" w-full md:w-150 " elevation={4}>
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

              size="small"
              fullWidth
            />

            <CustomField
              label="Password"
              id="outlined-username-small"
              // defaultValue="Small"
              size="small"
              fullWidth
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
