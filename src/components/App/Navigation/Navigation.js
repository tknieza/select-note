import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import SignOutButton from "../SignOutButton";

import { Box, Flex } from "rebass";

import * as ROUTES from "../../../constants/routes";

const SignedIn = () => (
  <Flex>
    <Box p={3} width={1 / 2} bg="white">
      <Link to={ROUTES.LANDING}>Landing</Link>
    </Box>
    <Box p={3} width={1 / 2} bg="white">
      <Link to={ROUTES.HOME}>Home</Link>
    </Box>
    <Box p={3} width={1 / 2} bg="white">
      <SignOutButton />
    </Box>
  </Flex>
);

const NotSignedIn = () => (
  <Flex>
    <Box p={3} width={1 / 2} bg="white">
      <Link to={ROUTES.LANDING}>Landing</Link>
    </Box>
    <Box p={3} width={1 / 2} bg="white">
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </Box>
    <Box p={3} width={1 / 2} bg="white">
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </Box>
  </Flex>
);

const Navigation = ({ authUser }) => {
  return authUser ? <SignedIn /> : <NotSignedIn />;
};

Navigation.propTypes = {
  authUser: propTypes.object
};

export default Navigation;
