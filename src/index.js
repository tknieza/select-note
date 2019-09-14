import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

import { ThemeProvider } from "emotion-theming";
import baseTheme from "@rebass/preset";

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    monospace: "Roboto, sans-serif"
  }
};

require("dotenv").config();

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
