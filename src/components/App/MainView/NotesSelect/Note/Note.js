import React from "react";
import propTypes from "prop-types";
import { Card, Text, Heading } from "rebass";

const Notes = ({ heading, index, text, handleClick }) => (
  <Card
    as="a"
    onClick={() => handleClick(index)}
    sx={{
      p: "1rem",
      height: ["5rem", "15rem"],
      transition: "box-shadow 0.2s ease",
      borderRadius: 8,
      overflow: "hidden",
      userSelect: "none",
      ":hover": {
        boxShadow: "0 0 4px rgba(0,0,0,.425);"
      }
    }}
  >
    <Heading
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }}
    >
      {heading}
    </Heading>
    <Text
      fontFamily="body"
      fontWeight="lighter"
      sx={{
        padding: "0.8rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        overflowWrap: "break-word"
      }}
    >
      {text}
    </Text>
    <Heading
      sx={{
        textAlign: "right"
      }}
      color="muted"
    >
      {index + 1}
    </Heading>
  </Card>
);

Notes.propTypes = {
  heading: propTypes.string.isRequired,
  index: propTypes.number,
  text: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired
};

export default Notes;
