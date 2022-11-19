import { HighlightOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Button, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UploadProfileImage } from "../redux/actionUser";
import { HeaderProfile } from "./Profile";

const UploadAvatar = () => {
  const {
    user: { userLoading, userData, userError },
  } = useSelector((last) => last);
  const dispatch = useDispatch();
  const [newImage, setNewImage] = useState("");

  return (
    <HeaderProfile value="4">
      <form
        className={`flex justify-center items-center flex-col gap-3 ${
          userLoading ? "pointer-events-none" : ""
        }`}
        onSubmit={(e) => e.preventDefault()}
      >
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
          style={{ display: "none" }}
          id="image-input"
          type="file"
        />
        <label htmlFor="image-input">
          <Button variant="contained" component="span">
            select Image
          </Button>
        </label>
        <Box className="h-32  justify-center items-center">
          <Box className="w-40 h-full">
            <img
              variant={"square"}
              alt="The image"
              src={newImage ? URL.createObjectURL(newImage) : userData.image}
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: grey[300],
              }}
              className="border"
            />
          </Box>
        </Box>
        {newImage ? (
          <IconButton
            onClick={() => {
              URL.revokeObjectURL(newImage);
              setNewImage("");
              document.getElementById("image-input").value = null;
            }}
          >
            <HighlightOff />
          </IconButton>
        ) : (
          ""
        )}
        <Box>
          <LoadingButton
            loading={userLoading}
            variant="contained"
            className="block"
            type="submit"
            onClick={() => {
              dispatch(UploadProfileImage({ newImage, ...userData }));
            }}
          >
            upload Image
          </LoadingButton>
        </Box>
      </form>
    </HeaderProfile>
  );
};

export default UploadAvatar;
