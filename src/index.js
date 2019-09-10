import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

const theTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    monospace: "Roboto, sans-serif"
  }
};

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <ThemeProvider theme={theTheme}>
      <App />
    </ThemeProvider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
