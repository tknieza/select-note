import React from "react";
import propTypes from "prop-types";
import { Box } from "rebass";

import Note from "../Note";

const NotesSelect = ({ mode, notes, setNotes, enable }) => {
  const handleClick = id => {
    if (mode === "remove") {
      setNotes(
        notes.filter(item => {
          return item.index != id;
        })
      );
    } else if (mode === "view") {
      // TODO: Write note taking view that this redirects to
      // focusNote(id);

      const note = notes.find(item => {
        return item.index === id;
      });
      console.log(note);
      enable(note);
      return;
    }
    return;
  };

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
        <Note
          heading={heading}
          text={text}
          index={index}
          handleClick={handleClick}
          key={index}
        />
      ))}
    </Box>
  );
};

NotesSelect.propTypes = {
  mode: propTypes.string,
  notes: propTypes.arrayOf(propTypes.object),
  setNotes: propTypes.func,
  enable: propTypes.func
};

export default NotesSelect;
