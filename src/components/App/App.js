import React from "react";

import Login from "./Login";
import NotesSelect from "./NotesSelect";
import NavBar from "./Navbar";
import { Box } from "rebass";

import "./App.scss";

const App = () => {
  return (
    <Box>
      <NavBar />
      {/* <Login /> */}
      <NotesSelect />
    </Box>
  );
};

export default App;
