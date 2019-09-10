import React from "react";
import propTypes from "prop-types";
import { Box, Flex, Text, Button } from "rebass";

const NavBar = ({ mode, setMode, newNote }) => {
  return (
    <Flex px={2} marginBottom={4} color="white" bg="black" alignItems="center">
      <Text
        p={2}
        fontSize={["2rem", "3rem"]}
        sx={{
          fontFamily: "heading",
          fontWeight: "500"
        }}
      >
        {mode[0].toUpperCase() + mode.slice(1)} Mode
      </Text>
      <Box mx="auto" />
      <Box>
        <Button mx={2} variant="primary" onClick={newNote}>
          Add
        </Button>
        <Button
          mx={2}
          variant="secondary"
          onClick={() => {
            mode === "remove" ? setMode("note") : setMode("remove");
          }}
        >
          Remove
        </Button>
      </Box>
    </Flex>
  );
};

NavBar.propTypes = {
  mode: propTypes.string.isRequired,
  setMode: propTypes.func.isRequired,
  newNote: propTypes.func.isRequired
};

export default NavBar;
