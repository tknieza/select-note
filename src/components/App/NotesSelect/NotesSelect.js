import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "rebass";

import Note from "../Note";

const NotesSelect = ({ notes }) => {
  return (
    <Box
      sx={{
        display: "grid",
        width: "90%",
        margin: "auto",
        gridGap: 3,
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"]
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
        <Note key={item} />
      ))}
    </Box>
  );
};

NotesSelect.propTypes = {
  notes: PropTypes.object
};

export default NotesSelect;
