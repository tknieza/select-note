import React from "react";
import propTypes from "prop-types";

import { diffRemoved } from "react-icons-kit/oct/diffRemoved";
import { diffAdded } from "react-icons-kit/oct/diffAdded";

import NavigationButton from "../../Navigation/NavigationButton";
import { Flex } from "rebass";

const NavBar = ({ mode, setMode, newNote }) => {
  return (
    <Flex
      color="white"
      sx={{
        position: "fixed",
        right: 0,
        bottom: 0
      }}
    >
      <NavigationButton
        m={2}
        icon={diffAdded}
        onClick={newNote}
        sx={{
          background: "green"
        }}
      />
      <NavigationButton
        m={2}
        icon={diffRemoved}
        onClick={() => {
          mode === "remove" ? setMode("note") : setMode("remove");
        }}
        sx={{
          background: "tomato"
        }}
      />
    </Flex>
  );
};

NavBar.propTypes = {
  mode: propTypes.string.isRequired,
  setMode: propTypes.func.isRequired,
  newNote: propTypes.func.isRequired
};

export default NavBar;
