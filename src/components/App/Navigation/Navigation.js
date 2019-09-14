import React from "react";

import NavigationButton from "./NavigationButton";

import { Box, Flex } from "rebass";

import { usingFirebase } from "../../Firebase";
import * as ROUTES from "../../../constants/routes";

const SignedInBar = props => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Box p={3}>
      <NavigationButton
        content="Landing Page"
        route={ROUTES.LANDING}
        history={props.history}
      />
    </Box>
    <Box p={3}>
      <NavigationButton
        content="Home"
        route={ROUTES.HOME}
        history={props.history}
      />
    </Box>
    <Box mx="auto" />
    <Box p={3}>
      <NavigationButton
        content="Sign Out"
        route={ROUTES.LANDING}
        action={props.firebase.doSignOut}
        history={props.history}
      />
    </Box>
  </Flex>
);

const SignedOutBar = props => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Box p={3}>
      <NavigationButton
        content="Landing Page"
        route={ROUTES.LANDING}
        history={props.history}
      />
    </Box>
    <Box mx="auto" />
    <Box p={3}>
      <NavigationButton
        content="Sign Up"
        route={ROUTES.SIGN_UP}
        history={props.history}
      />
    </Box>
    <Box p={3}>
      <NavigationButton
        content="Sign In"
        route={ROUTES.SIGN_IN}
        history={props.history}
      />
    </Box>
  </Flex>
);

const Navigation = ({ authUser, ...otherProps }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary",
        color: "secondary"
      }}
    >
      {authUser ? (
        <SignedInBar {...otherProps} />
      ) : (
        <SignedOutBar {...otherProps} />
      )}
    </Box>
  );
};

import("prop-types").then(propTypes => {
  Navigation.propTypes = {
    authUser: propTypes.object
  };
});

export default usingFirebase(Navigation);
