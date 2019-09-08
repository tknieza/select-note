import React from "react";
import propTypes from "prop-types";

import Modal from "react-modal";
import { Button, Heading, Text } from "rebass";

Modal.setAppElement("#root");

const NoteModal = ({ view, disable, changeHeading, changeContent }) => (
  <Modal isOpen={view.enabled} contentLabel="Note">
    <Button
      onClick={disable}
      sx={{
        bg: "red"
      }}
    >
      Exit
    </Button>
    <Heading>{view.note.heading}</Heading>
    <Text
      fontFamily="body"
      fontWeight="lighter"
      sx={{
        padding: "0.8rem"
      }}
    >
      {view.note.text}
    </Text>
    <Heading
      sx={{
        textAlign: "right"
      }}
      color="muted"
    >
      {view.note.index + 1}
    </Heading>
  </Modal>
);

NoteModal.propTypes = {
  view: propTypes.object.isRequired,
  disable: propTypes.func.isRequired,
  changeHeading: propTypes.func.isRequired,
  changeContent: propTypes.func.isRequired
};

export default NoteModal;
