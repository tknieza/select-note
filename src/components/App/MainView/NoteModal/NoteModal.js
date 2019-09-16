import React from "react";

import Modal from "react-modal";
import { Box, Button, Heading } from "rebass";
import { Input, Textarea } from "@rebass/forms";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    marginTop: "5rem"
  }
};

const NoteModal = ({ currentNote, disable, changeNote }) => (
  <Modal isOpen={currentNote !== null} contentLabel="Note" style={customStyles}>
    <form id="myform">
      <Button
        onClick={e => {
          changeNote(currentNote, document.forms["myform"]);
          disable();
        }}
        sx={{
          bg: "red"
        }}
      >
        Exit
      </Button>
      <Box margin="1rem 2rem 3rem 2rem">
        <Input
          id="heading"
          name="heading"
          type="text"
          placeholder="Heading"
          defaultValue={currentNote.heading}
          sx={{
            padding: "0.5rem",
            fontFamily: "body",
            fontSize: ["2rem", "3rem", "5rem"],
            fontWeight: "bold",
            border: "none",
            borderBottom: "2px solid",
            borderRadius: "0",
            borderColor: "muted",
            outline: "none"
          }}
        />
      </Box>
      <Box margin="1rem 2rem 3rem 2rem">
        <Textarea
          id="text"
          name="text"
          type="text"
          placeholder="text"
          defaultValue={currentNote.text}
          fontFamily="body"
          fontWeight="lighter"
          sx={{
            fontSize: ["1rem", "1.5rem", "3rem"],
            padding: "0.5rem",
            resize: "none",
            height: "35rem",
            border: "none",
            outline: "none"
          }}
        />
      </Box>
    </form>
    <Heading
      sx={{
        textAlign: "right"
      }}
      color="muted"
    >
      {currentNote.index + 1}
    </Heading>
  </Modal>
);

import("prop-types").then(propTypes => {
  NoteModal.propTypes = {
    currentNote: propTypes.object.isRequired,
    disable: propTypes.func.isRequired,
    changeNote: propTypes.func.isRequired
  };
});

export default NoteModal;
