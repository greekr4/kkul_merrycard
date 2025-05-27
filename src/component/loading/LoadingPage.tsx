import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingPage = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100dvh",
        backgroundColor: "#ffffff",
        top: 0,
        left: 0,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingPage;
