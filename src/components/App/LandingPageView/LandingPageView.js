import React from "react";
import { Box, Text, Image } from "rebass";

import logo from "../../../images/default-monochrome-white.svg";
import image from "../../../images/27-desktop.png";

const LandingPageView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Box
        sx={{
          flex: "1 1 auto",
          backgroundColor: "#273ECC"
        }}
      >
        <Image
          sx={{
            margin: "auto"
          }}
          src={image}
          alt="logo"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Image
            sx={{
              margin: "auto"
            }}
            src={logo}
            alt="logo"
            height="10rem"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPageView;
