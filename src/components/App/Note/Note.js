import React from "react";
import propTypes from "prop-types";
import { Card, Text, Heading } from "rebass";

const Notes = ({ heading, index, text, handleClick }) => (
  <Card
    as="a"
    onClick={() => handleClick(index)}
    sx={{
      p: "1rem",
      height: "18rem",
      transition: "box-shadow 0.2s ease",
      borderRadius: 8,
      ":hover": {
        boxShadow: "0 0 4px rgba(0,0,0,.425);"
      }
    }}
  >
    <Heading>{heading}</Heading>
    <Text
      fontFamily="body"
      fontWeight="lighter"
      sx={{
        padding: "0.8rem"
      }}
    >
      {text}
    </Text>
    <Heading
      sx={{
        textAlign: "right"
      }}
    >
      {index}
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
