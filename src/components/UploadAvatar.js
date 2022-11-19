import { Avatar, Box, Button, Paper, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderProfile } from "./Profile";

const UploadAvatar = () => {
  const {
    user: { userLoading, userData, userError },
  } = useSelector((last) => last);
  const [newImage, setNewImage] = useState("");

  return (
    <HeaderProfile value="4">
      <Box className="flex justify-center items-center flex-col gap-3">
        <input
          onChange={(e) => {
            const file = e.target.files[0];
            console.log(e.target);

            if (file && file.type.substring(0, 5) === "image") {
              setNewImage(file);
              console.log(file);
            }
          }}
          accept="image/*"
          // className={classes.input}
          style={{ display: "none" }}
          id="raised-button-file"
          // multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span">
            select Image
          </Button>
        </label>
        <Box>
          <Avatar
            variant={""}
            alt="The image"
            src={newImage ? URL.createObjectURL(newImage) : userData.image}
            style={{
              width: 100,
              height: 100,
              bgcolor: grey[400],
            }}
            className="border"
          />
        </Box>
        <Button
          onClick={() => {
            URL.revokeObjectURL(newImage);
            setNewImage("");
          }}
        >
          X
        </Button>
        <Box>
          <Button variant="contained" className="block" onClick={() => {}}>
            upload Image
          </Button>
        </Box>
      </Box>
    </HeaderProfile>
  );
};

export default UploadAvatar;
