import React from "react";
import propTypes from "prop-types";
import { Box, Card, Flex, Text, Heading } from "rebass";

const handleClick = event => {
  console.log(event.target.value);
};

const Notes = ({ index }) => (
  <Card
    as="a"
    onClick={handleClick}
    sx={{
      p: "1rem",
      transition: "box-shadow 0.2s ease",
      ":hover": {
        boxShadow: "0 0 4px rgba(0,0,0,.425);"
      }
    }}
  >
    <Heading>Card {index}</Heading>
    <Text
      fontFamily="body"
      fontWeight="lighter"
      sx={{
        padding: "0.8rem"
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare lorem
      metus, ut consequat est consectetur sed. Fusce sollicitudin ante dolor,
      malesuada mollis lorem vehicula vel. Suspendisse non gravida orci, eget
      egestas diam. Pellentesque luctus sagittis mi, sed efficitur orci ultrices
      id.
    </Text>
  </Card>
);

Notes.propTypes = {
  index: propTypes.number
};

export default Notes;
