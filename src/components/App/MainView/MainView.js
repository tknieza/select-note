import React, { useState } from "react";
import { Box } from "rebass";

import NotesSelect from "./NotesSelect";
import NoteModal from "./NoteModal";
import NavigationBar from "./NavigationBar";

import { usingFirebase } from "../../Firebase";

const MainView = props => {
  const [notes, setNotes] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [mode, setMode] = useState("note");
  const [currentNote, setCurrentNote] = useState(null);

  const syncNewNotes = notes => {
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

    syncNewNotes(newNotes);
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

    syncNewNotes(newNotes);

    // Taking user straight to note editing screen
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
      <NavigationBar mode={mode} setMode={setMode} newNote={addNewNote} />
      <NotesSelect
        mode={mode}
        notes={notes}
        syncNewNotes={syncNewNotes}
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
