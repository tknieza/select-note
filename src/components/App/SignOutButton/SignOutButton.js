import React from "react";

import { Button } from "rebass";

import { usingFirebase } from "../../Firebase";

const SignOutButton = ({ firebase }) => (
  <Button onClick={firebase.doSignOut}>Sign Out</Button>
);

export default usingFirebase(SignOutButton);
