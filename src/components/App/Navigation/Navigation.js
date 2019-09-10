import React from "react";
import { Link } from "react-router-dom";

import { Box, Flex } from "rebass";

import * as ROUTES from "../../../constants/routes";

const Navigation = () => (
  <Flex>
    <Box p={3} width={1 / 2} bg="white">
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </Box>
    <Box p={3} width={1 / 2} bg="white">
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </Box>
    <Box p={3} width={1 / 2} bg="white">
      <Link to={ROUTES.LANDING}>Landing</Link>
    </Box>
    <Box p={3} width={1 / 2} bg="white">
      <Link to={ROUTES.HOME}>Home</Link>
    </Box>
  </Flex>
);

export default Navigation;
