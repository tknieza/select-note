import React, { useState } from "react";
import Login from "./Login";
import NotesSelect from "./NotesSelect";
import NavBar from "./Navbar";
import { Box } from "rebass";

import "./App.scss";

const App = () => {
  const [notes, setNotes] = useState([
    {
      heading: "Todo 1",
      text: "lorem10",
      index: 1
    },
    {
      heading: "Todo 2",
      text: "lorem20",
      index: 2
    },
    {
      heading: "Todo 3",
      text: "lorem30",
      index: 3
    }
  ]);

  // Modes:
  // view - default
  // add
  // remove
  const [mode, setMode] = useState("view");

  return (
    <Box>
      <NavBar mode={mode} setMode={setMode} />
      <NotesSelect mode={mode} notes={notes} setNotes={setNotes} />
    </Box>
  );
};

export default App;
