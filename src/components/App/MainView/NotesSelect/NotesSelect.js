import React from "react";
import { Box } from "rebass";
import Note from "./Note";

const NotesSelect = ({ mode, notes, syncNewNotes, setCurrentNote }) => {
  const handleClick = index => {
    if (mode === "remove") {
      syncNewNotes(
        notes
          .filter(item => {
            return item.index != index;
          })
          .map((item, id) => {
            return { ...item, index: id };
          })
      );
    } else if (mode === "note") {
      const note = notes.find(item => {
        return item.index === index;
      });
      setCurrentNote(note);
    }
    return;
  };

  return (
    <Box
      sx={{
        display: "grid",
        width: "80%",
        margin: "auto",
        paddingTop: "1rem",
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

import("prop-types").then(propTypes => {
  NotesSelect.propTypes = {
    mode: propTypes.string,
    notes: propTypes.arrayOf(propTypes.object),
    syncNewNotes: propTypes.func,
    setCurrentNote: propTypes.func
  };
});

export default NotesSelect;
