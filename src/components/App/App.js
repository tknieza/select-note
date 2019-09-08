import React, { useState } from "react";

import Login from "./Login";
import NavBar from "./Navbar";
import NotesSelect from "./NotesSelect";
import NoteModal from "./NoteModal/NoteModal";

import { Box } from "rebass";

import "./App.scss";

const App = () => {
  const [notes, setNotes] = useState([
    {
      heading: "Todo 1",
      text: "lorem10",
      index: 0
    },
    {
      heading: "Todo 2",
      text: "lorem20",
      index: 1
    },
    {
      heading: "Todo 3",
      text: "lorem30",
      index: 2
    }
  ]);

  const [view, setView] = useState({
    enabled: false,
    note: notes[0]
  });

  const enableNoteView = note => {
    setView({
      note: note,
      enabled: true
    });
  };

  const disableNoteView = () => {
    setView({
      ...view,
      enabled: false
    });
  };

  // Modes:
  // view - default
  // add
  // remove
  const [mode, setMode] = useState("view");

  return (
    <Box>
      <NavBar mode={mode} setMode={setMode} />
      <NotesSelect
        mode={mode}
        notes={notes}
        setNotes={setNotes}
        enable={enableNoteView}
      />
      <NoteModal view={view} disable={disableNoteView} />
    </Box>
  );
};

export default App;
