import React from "react";
import propTypes from "prop-types";
import { Box, Flex, Text, Button } from "rebass";

const NavBar = ({ mode, setMode }) => {
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
        <Button
          mx={2}
          variant="primary"
          onClick={() => {
            mode === "add" ? setMode("view") : setMode("add");
          }}
        >
          Add
        </Button>
        <Button
          mx={2}
          variant="secondary"
          onClick={() => {
            mode === "remove" ? setMode("view") : setMode("remove");
          }}
        >
          Remove
        </Button>
      </Box>
    </Flex>
  );
};

NavBar.propTypes = {
  mode: propTypes.string,
  setMode: propTypes.func
};

export default NavBar;
