import { Avatar, Box, Paper, Tab, Tabs, useMediaQuery } from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../redux/actionUser";
import { Navigate, useNavigate } from "react-router-dom";
import {
  AccountBox,
  Key,
  Login,
  ManageAccounts,
  Portrait,
} from "@mui/icons-material";
const Profile = () => {
  const {
    user: { userLoading, userData, userError },
  } = useSelector((last) => last);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(userData));
  }, []);
  const mediumViewport = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Box className="">
        <Box
          flexDirection={mediumViewport ? "row" : "column"}
          sx={{ width: "100%", display: "flex", gap: 2 }}
        >
          <Box>
            <HeaderProfile value="1" />
          </Box>
          <Paper elevation={4} className="flex-1">
            <Avatar
              variant={""}
              alt="The image"
              src={userData.image}
              sx={{
                width: 150,
                height: 150,
                bgcolor: grey[400],
              }}
              className="border"
            />
            <Avatar
              variant={""}
              alt="The image"
              src={userData.image}
              sx={{
                width: 150,
                height: 150,
                bgcolor: grey[400],
              }}
              className="border"
            />
            <Avatar
              variant={""}
              alt="The image"
              src={userData.image}
              sx={{
                width: 150,
                height: 150,
                bgcolor: grey[400],
              }}
              className="border"
            />
            <Avatar
              variant={""}
              alt="The image"
              src={userData.image}
              sx={{
                width: 150,
                height: 150,
                bgcolor: grey[400],
              }}
              className="border"
            />
            <Avatar
              variant={""}
              alt="The image"
              src={userData.image}
              sx={{
                width: 150,
                height: 150,
                bgcolor: grey[400],
              }}
              className="border"
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
};
export const HeaderProfile = ({ value }) => {
  const navigate = useNavigate();
  const mediumViewport = useMediaQuery("(min-width:700px)");
  return (
    <Paper elevation={3} className="sticky top-20">
      <Tabs
        orientation={mediumViewport ? "vertical" : "horizontal"}
        scrollButtons="auto"
        allowScrollButtonsMobile
        variant="scrollable"
        value={value}
        aria-label="basic tabs"
      >
        <Tab
          icon={<AccountBox />}
          //   iconPosition="start"
          label="Profile"
          value="1"
          onClick={() => navigate("/profile")}
        />
        <Tab
          icon={<ManageAccounts />}
          //   iconPosition="start"
          label="Change Profile"
          value="2"
          onClick={() => navigate("/profile/change")}
        />
        <Tab
          icon={<Key />}
          //   iconPosition="start"
          label="Change Password"
          value="3"
          onClick={() => navigate("/profile/password")}
        />

        <Tab
          icon={<Portrait />}
          //   iconPosition="start"
          label="Upload Image"
          value="4"
          onClick={() => navigate("/profile/avatar")}
        />
      </Tabs>
    </Paper>
  );
};
export default Profile;
