import React from "react";

import { Box, Flex, Text } from "rebass";

export default () => (
  <Flex
    sx={{
      flexWrap: "wrap",
      bg: "background",
      marginBottom: "1.5rem",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
    }}
  >
    <Box
      sx={{
        p: 3,
        flexGrow: 1,
        flexBasis: 256
      }}
    >
      <Text
        sx={{
          fontFamily: "heading",
          fontWeight: "500"
        }}
      >
        Sidebar
      </Text>
    </Box>
    <Box
      sx={{
        p: 3,
        flexGrow: 99999,
        flexBasis: 0,
        minWidth: 320,
        bg: "primary"
      }}
    >
      <Text
        fontSize={["3rem", "5rem", "8rem"]}
        sx={{
          color: "background",
          fontFamily: "heading",
          fontWeight: "500"
        }}
      >
        Select Note
      </Text>
    </Box>
  </Flex>
);
