import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { Box, Heading } from "rebass";

export default () => {
  return (
    <Box
      sx={{
        backgroundColor: "background",
        minHeight: "100vh"
      }}
    >
      <Box>
        <Heading
          sx={{
            p: 3,
            fontFamily: "'Pacifico', cursive",
            fontSize: ["3rem", "6rem"],
            color: "primary",
            userSelect: "none",
            textAlign: "center"
          }}
        >
          Select Note
        </Heading>
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
        </Box>
        <Box p={3} width={["100%", "30rem"]}>
          <Heading color="primary">Sign Up</Heading>
          <SignUpForm />
        </Box>
      </Box>
    </Box>
  );
};
