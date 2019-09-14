import React from "react";
import { withRouter } from "react-router-dom";

import { Button } from "rebass";
import { usingFirebase } from "../../../Firebase";

const NavigationButton = ({
  content,
  route,
  action,
  history,
  ...otherProps
}) => (
  <Button
    {...otherProps}
    sx={{
      backgroundColor: "secondary"
    }}
    onClick={() => {
      if (action) action();
      history.push(route);
    }}
  >
    {content}
  </Button>
);

import("prop-types").then(propTypes => {
  NavigationButton.propTypes = {
    content: propTypes.string,
    route: propTypes.string,
    action: propTypes.func,
    history: propTypes.object
  };
});

export default withRouter(usingFirebase(NavigationButton));
