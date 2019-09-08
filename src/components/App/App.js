import React, { useState } from "react";

// import Login from "./Login";
import NavBar from "./Navbar";
import NotesSelect from "./NotesSelect";
import NoteModal from "./NoteModal/NoteModal";

import { Box } from "rebass";

import "./App.scss";

const App = () => {
  const [notes, setNotes] = useState([]);
  // Modes: note, remove
  const [mode, setMode] = useState("note");
  const [currentNote, setCurrentNote] = useState(null);

  const changeNote = (note, values) => {
    const newNotes = notes;

    newNotes[note.index] = {
      ...newNotes[note.index],
      heading: values[1].value,
      text: values[2].value
    };

    setNotes(newNotes);
  };

  const addNewNote = () => {
    const newNotes = notes;

    newNotes.push({
      heading: "",
      text: "",
      index: notes.length
    });

    setNotes(
      newNotes.map((item, id) => {
        return { ...item, index: id };
      })
    );

    // Taking user straight to editing note
    setCurrentNote(notes[notes.length - 1]);
  };

  return (
    <Box>
      <NavBar mode={mode} setMode={setMode} newNote={addNewNote} />
      <NotesSelect
        mode={mode}
        notes={notes}
        setNotes={setNotes}
        setCurrentNote={setCurrentNote}
      />
      {currentNote && (
        <NoteModal
          currentNote={currentNote}
          disable={() => setCurrentNote(null)}
          changeNote={changeNote}
        />
      )}
    </Box>
  );
};

export default App;
