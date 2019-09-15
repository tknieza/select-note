import React from "react";

import NavigationButton from "./NavigationButton";

import { signIn } from "react-icons-kit/oct/signIn";
import { signOut } from "react-icons-kit/oct/signOut";
import { home } from "react-icons-kit/oct/home";
import { note } from "react-icons-kit/oct/note";
import { user } from "react-icons-kit/entypo/user";

import { Box, Flex } from "rebass";

import { usingFirebase } from "../../Firebase";
import * as ROUTES from "../../../constants/routes";

const SignedInBar = props => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Box p={3}>
      <NavigationButton
        content="Home"
        route={ROUTES.LANDING}
        history={props.history}
        icon={home}
      />
    </Box>
    <Box p={3}>
      <NavigationButton
        content="Notes"
        route={ROUTES.HOME}
        history={props.history}
        icon={note}
      />
    </Box>
    <Box mx="auto" />
    <Box p={3}>
      <NavigationButton
        content="Logout"
        route={ROUTES.LANDING}
        action={props.firebase.doSignOut}
        history={props.history}
        icon={signOut}
      />
    </Box>
  </Flex>
);

const SignedOutBar = props => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Box p={3}>
      <NavigationButton
        content="Home"
        route={ROUTES.LANDING}
        history={props.history}
        icon={home}
      />
    </Box>
    <Box mx="auto" />
    <Box p={3}>
      <NavigationButton
        content="Register"
        route={ROUTES.SIGN_UP}
        history={props.history}
        icon={user}
      />
    </Box>
    <Box p={3}>
      <NavigationButton
        content="Login"
        route={ROUTES.SIGN_IN}
        history={props.history}
        icon={signIn}
      />
    </Box>
  </Flex>
);

const Navigation = ({ authUser, ...otherProps }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary",
        color: "secondary",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999
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
