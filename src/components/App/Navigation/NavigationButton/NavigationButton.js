import React from "react";
import { withRouter } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { Box, Button, Text } from "rebass";
import { usingFirebase } from "../../../Firebase";

const NavigationButton = ({
  content,
  route,
  action,
  history,
  icon,
  ...otherProps
}) => (
  <Button
    sx={{
      backgroundColor: "secondary",
      display: "flex"
    }}
    onClick={() => {
      if (action) action();
      if (route) history.push(route);
    }}
    {...otherProps}
  >
    {icon && (
      <Box p={1}>
        <Icon size={24} icon={icon} />
      </Box>
    )}
    {content && (
      <Text
        p={1}
        height="100%"
        sx={{
          margin: "auto"
        }}
      >
        {content}
      </Text>
    )}
  </Button>
);

import("prop-types").then(propTypes => {
  NavigationButton.propTypes = {
    content: propTypes.string,
    route: propTypes.string,
    action: propTypes.func,
    icon: propTypes.object,
    history: propTypes.object
  };
});

export default withRouter(usingFirebase(NavigationButton));
