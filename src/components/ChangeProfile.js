import { Box, Paper } from "@mui/material";
import React from "react";
import { HeaderProfile } from "./Profile";

const ChangeProfile = () => {
  return (
    <>
      <Box className=" w-full  flex gap-2">
        <Box>
          <HeaderProfile value="2" />
        </Box>
        <Paper elevation={4} className="flex-1">
          ChangeProfile
        </Paper>
      </Box>
    </>
  );
};

export default ChangeProfile;
