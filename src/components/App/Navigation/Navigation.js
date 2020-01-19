import React from "react";

import NavigationButton from "./NavigationButton";
import { Box, Flex } from "rebass";

// Icons
import { signIn } from "react-icons-kit/oct/signIn";
import { signOut } from "react-icons-kit/oct/signOut";
import { home } from "react-icons-kit/oct/home";
import { note } from "react-icons-kit/oct/note";
import { user } from "react-icons-kit/entypo/user";

import { usingFirebase } from "../../Firebase";
import * as ROUTES from "../../../constants/routes";

const SignedInBar = props => (
  <Flex
    p={2}
    backgroundColor="background"
    alignItems="center"
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "4rem",
      zIndex: 999,
      marginBottom: "10rem"
    }}
  >
    <Box>
      <NavigationButton
        content="Home"
        route={ROUTES.LANDING}
        history={props.history}
        icon={home}
      />
    </Box>
    <Box mx="0.5rem" />
    <Box>
      <NavigationButton
        content="Notes"
        route={ROUTES.HOME}
        history={props.history}
        icon={note}
      />
    </Box>
    <Box mx="auto" />
    <Box>
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
  <Flex
    p={2}
    backgroundColor="background"
    alignItems="center"
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "4rem",
      zIndex: 999,
      marginBottom: "10rem"
    }}
  >
    <Box>
      <NavigationButton
        content="Home"
        route={ROUTES.LANDING}
        history={props.history}
        icon={home}
      />
    </Box>
    <Box mx="auto" />
    <Box>
      <NavigationButton
        content="Register"
        route={ROUTES.SIGN_UP}
        history={props.history}
        icon={user}
      />
    </Box>
    <Box mx="0.5rem" />
    <Box>
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
    <>
      {authUser ? (
        <SignedInBar {...otherProps} />
      ) : (
        <SignedOutBar {...otherProps} />
      )}
    </>
  );
};

import("prop-types").then(propTypes => {
  Navigation.propTypes = {
    authUser: propTypes.object
  };
});

export default usingFirebase(Navigation);
