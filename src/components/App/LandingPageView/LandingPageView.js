import React from "react";
import { Box, Text, Image, Flex, Card, Heading } from "rebass";

import LogoLight from "../../../images/default-monochrome-white.svg";
import LogoDark from "../../../images/default-monochrome-black.svg";

const LandingPageView = ({ darkmode }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background"
      }}
    >
      <Box
        sx={{
          display: "grid",
          flex: 1,
          minHeight: "100vh",
          gridTemplateAreas: [
            '"long-box long-box" "left-box right-box" "wide-box wide-box"',
            '"long-box long-box left-box right-box" "long-box long-box wide-box wide-box"'
          ],
          gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"],
          gridTemplateRows: ["2fr 1fr 1fr", "none"],
          gridGap: 20,
          margin: 20
        }}
      >
        <Box
          sx={{
            flex: 1,
            gridArea: "long-box"
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              src={darkmode ? LogoLight : LogoDark}
              alt="logo"
              height="8rem"
            />
            <Text p={3} fontFamily="body" color="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, quisquam qui. Quidem, itaque! Inventore nesciunt,
              sapiente modi sint, cumque commodi quam deserunt laudantium
              consequatur quos nostrum veritatis id accusamus eos?
            </Text>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            gridArea: "left-box"
          }}
        >
          Box Left
          <Card width={256}>
            <Image src={LogoDark} alt="Logo" />
            <Heading>Card</Heading>
          </Card>
        </Box>
        <Box
          sx={{
            flex: 1,
            gridArea: "right-box"
          }}
        >
          Box Right
        </Box>
        <Box
          sx={{
            flex: 1,
            gridArea: "wide-box"
          }}
        >
          Wide box
        </Box>
      </Box>
    </Flex>
  );
};

import("prop-types").then(propTypes => {
  LandingPageView.propTypes = {
    darkmode: propTypes.bool.isRequired
  };
});

export default LandingPageView;
