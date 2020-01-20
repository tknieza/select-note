import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { Box, Heading, Text, Image } from "rebass";
import { Link } from "react-router-dom";
import Logo from "../../../images/default-monochrome-black.svg";
import * as ROUTES from "../../../constants/routes";

export default () => {
  return (
    <Box
      sx={{
        backgroundColor: "background",
        minHeight: "100vh"
      }}
    >
      <Box>
        <Image src={Logo} alt="Logo" height="10rem" />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridGap: 2,
          gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
          gap: "2rem",
          justifyItems: "center"
        }}
      >
        <Box p={3} width={["100%", "30rem"]}>
          <Heading color="primary">Sign In</Heading>
          <SignInForm />
          <Text fontFamily="monospace">
            Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          </Text>
        </Box>
        <Box p={3} width={["100%", "30rem"]}>
          <Heading color="primary">Sign Up</Heading>
          <SignUpForm />
        </Box>
      </Box>
    </Box>
  );
};
