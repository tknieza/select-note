import React, { useState } from "react";

import Login from "./Login";
import NavBar from "./Navbar";
import NotesSelect from "./NotesSelect";
import Modal from "react-modal";

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

  const enableView = note => {
    setView({
      note: note,
      enabled: true
    });
  };

  const disableView = () => {
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

  Modal.setAppElement("#root");

  return (
    <Box>
      <NavBar mode={mode} setMode={setMode} />
      <NotesSelect
        mode={mode}
        notes={notes}
        setNotes={setNotes}
        enableView={enableView}
      />
      <Modal isOpen={view.enabled} contentLabel="Example Modal">
        <h2>{view.note.heading}</h2>
        <button onClick={disableView}>close</button>
        <div>{view.note.text}</div>
      </Modal>
    </Box>
  );
};

export default App;
