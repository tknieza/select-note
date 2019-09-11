import React from "react";
import { withRouter } from "react-router-dom";

import { Button } from "rebass";

import * as ROUTES from "../../../constants/routes";
import { usingFirebase } from "../../Firebase";

const SignOutButton = ({ firebase, history }) => (
  <Button
    onClick={() => {
      firebase.doSignOut();
      history.push(ROUTES.LANDING);
    }}
  >
    Sign Out
  </Button>
);

export default withRouter(usingFirebase(SignOutButton));
