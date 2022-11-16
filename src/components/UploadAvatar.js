import { Box, Paper, useMediaQuery } from "@mui/material";
import React from "react";
import { HeaderProfile } from "./Profile";

const UploadAvatar = () => {
  const mediumViewport = useMediaQuery("(min-width:700px)");
  return <HeaderProfile value="4">UploadAvatar</HeaderProfile>;
};

export default UploadAvatar;
