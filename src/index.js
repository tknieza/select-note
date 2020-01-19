import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";
import Themes from "./constants/themes";

require("dotenv").config();

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App themes={Themes} />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
