import React from "react";
import { Box, Text, Image } from "rebass";

import LogoLight from "../../../images/default-monochrome-white.svg";
import LogoDark from "../../../images/default-monochrome-black.svg";

const LandingPageView = ({ darkmode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
      backgroundColor="background"
    >
      <Box
        sx={{
          flex: "1 1 auto"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Image
            src={darkmode ? LogoLight : LogoDark}
            alt="logo"
            height="10rem"
          />
        </Box>

        <Box
          sx={{
            margin: "3rem 10rem"
          }}
        >
          <Text p={1} color="text" height="100%" fontFamily="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Box margin="2rem" />
          <Text p={1} color="text" height="100%" fontFamily="body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

import("prop-types").then(propTypes => {
  LandingPageView.propTypes = {
    darkmode: propTypes.bool.isRequired
  };
});

export default LandingPageView;
