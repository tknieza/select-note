import React from "react";
import { Box, Flex, Image } from "rebass";
import { browser } from "react-icons-kit/oct/browser";
import { home } from "react-icons-kit/oct/home";
import { note } from "react-icons-kit/oct/note";
import { signIn } from "react-icons-kit/oct/signIn";
import { signOut } from "react-icons-kit/oct/signOut";
import NavigationButton from "./NavigationButton";
import { usingFirebase } from "../../Firebase";
import * as ROUTES from "../../../constants/routes";
import LogoLight from "../../../images/isolated-monochrome-white.svg";

const Navigation = ({ authUser, changeTheme, history, firebase }) => {
  return (
    <Flex
      p={2}
      backgroundColor="primary"
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
      <Box mx="0.4rem" />
      <Box>
        <Image
          src={LogoLight}
          alt="logo"
          height="2.4rem"
          sx={{ paddingTop: "4px" }}
        />
      </Box>
      <Box mx="0.6rem" />
      <Box>
        <NavigationButton
          content="Home"
          route={ROUTES.LANDING}
          history={history}
          icon={home}
        />
      </Box>
      <Box mx="0.5rem" />

      {authUser ? (
        <Box>
          <NavigationButton
            content="Notes"
            route={ROUTES.HOME}
            history={history}
            icon={note}
          />
        </Box>
      ) : null}

      {changeTheme ? (
        <NavigationButton action={changeTheme} icon={browser} />
      ) : null}

      <Box mx="auto" />
      {authUser ? (
        <Box>
          <NavigationButton
            content="Logout"
            route={ROUTES.LANDING}
            action={firebase.doSignOut}
            history={history}
            icon={signOut}
          />
        </Box>
      ) : (
        <>
          <Box>
            <NavigationButton
              content="Login"
              route={ROUTES.SIGN_IN}
              history={history}
              icon={signIn}
            />
          </Box>
        </>
      )}
    </Flex>
  );
};

import("prop-types").then(propTypes => {
  Navigation.propTypes = {
    authUser: propTypes.object,
    changeTheme: propTypes.func,
    history: propTypes.object,
    firebase: propTypes.object
  };
});

export default usingFirebase(Navigation);
