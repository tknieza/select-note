import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Heading } from "rebass";

import SignUpForm from "./SignUpForm";

import * as ROUTES from "../../../constants/routes";

const SignUpView = () => {
  return (
    <Box>
      <Heading>Sign Up</Heading>
      <SignUpForm />
    </Box>
  );
};

export const SignUpLink = () => (
  <Text>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </Text>
);

export default SignUpView;
