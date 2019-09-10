import React from "react";

import SignInForm from "./SignInForm";

import { SignUpLink } from "../SignUpView";

import { Box, Heading } from "rebass";

const SignInView = () => (
  <Box>
    <Heading>Sign In</Heading>
    <SignInForm />
    <SignUpLink />
  </Box>
);

export default SignInView;
