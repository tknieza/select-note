import React, { useState } from "react";

import { Box } from "rebass";

import NotesSelect from "./NotesSelect";
import NoteModal from "./NoteModal";
import NavBar from "./NavBar";

import { usingFirebase } from "../../Firebase";

const MainView = props => {
  const [notes, setNotes] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  // Modes: note, remove
  const [mode, setMode] = useState("note");
  const [currentNote, setCurrentNote] = useState(null);

  const set = notes => {
    setNotes(notes);
    props.firebase.user().set({ notes });
  };

  const changeNote = (note, values) => {
    const newNotes = notes;

    newNotes[note.index] = {
      ...newNotes[note.index],
      heading: values[1].value,
      text: values[2].value
    };

    set(newNotes);
  };

  const addNewNote = () => {
    let newNotes = notes;

    newNotes.push({
      heading: "",
      text: "",
      index: notes.length
    });

    newNotes = newNotes.map((item, id) => {
      return { ...item, index: id };
    });

    set(newNotes);

    // Taking user straight to editing note
    setCurrentNote(notes[notes.length - 1]);
  };

  props.firebase.auth.onAuthStateChanged(user => {
    if (user) {
      if (notes.length === 0 && !dataLoaded) {
        props.firebase
          .userNotes()
          .once("value")
          .then(snapshot => {
            if (snapshot.val()) {
              setNotes(snapshot.val());
            }
          });
        setDataLoaded(true);
      }
    }
  });

  return (
    <Box>
      <NavBar mode={mode} setMode={setMode} newNote={addNewNote} />
      <NotesSelect
        mode={mode}
        notes={notes}
        setNotes={set}
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

export default usingFirebase(MainView);
