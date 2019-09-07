import React, { useState } from "react";
import Login from "./Login";
import NotesSelect from "./NotesSelect";
import NavBar from "./Navbar";
import { Box } from "rebass";

import "./App.scss";

const App = () => {
  const [notes, setNotes] = useState([
    {
      heading: "test",
      text: "lorem30",
      index: 1
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
