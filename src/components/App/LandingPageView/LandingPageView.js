import React from "react";
import { Box } from "rebass";

const LandingPageView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh"
      }}
    >
      <Box
        sx={{
          flex: "1 1 auto",
          p: 3
        }}
      >
        Content
      </Box>
      <Box
        sx={{
          p: 3
        }}
      >
        Footer
      </Box>
    </Box>
  );
};

export default LandingPageView;
