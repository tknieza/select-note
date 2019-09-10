import React from "react";
import { Box, Text } from "rebass";

import SignUpForm from "./SignUpForm";
import { withFirebase } from "../../Firebase";

const SignUpView = () => {
  return (
    <Box>
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
