import React, { useState } from "react";
import propTypes from "prop-types";
import { Box } from "rebass";

import Note from "../Note";

const NotesSelect = ({ mode, notes, setNotes }) => {
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
      {notes.map(({ heading, text, index }) => (
        <Note heading={heading} text={text} index={index} key={index} />
      ))}
    </Box>
  );
};

NotesSelect.propTypes = {
  mode: propTypes.string,
  notes: propTypes.arrayOf(propTypes.object),
  setNotes: propTypes.func
};

export default NotesSelect;
