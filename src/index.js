import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

import { ThemeProvider } from "emotion-theming";
import * as THEMES from "@theme-ui/presets";

const themes = [
  {
    dark: false,
    theme: {
      ...THEMES.bootstrap,
      fonts: {
        body: "Roboto, sans-serif",
        heading: "Roboto, sans-serif",
        monospace: "Roboto, sans-serif"
      }
    }
  },
  {
    dark: true,
    theme: {
      ...THEMES.dark,
      fonts: {
        body: "Roboto, sans-serif",
        heading: "Roboto, sans-serif",
        monospace: "Roboto, sans-serif"
      }
    }
  },
  {
    dark: false,
    theme: {
      ...THEMES.swiss,
      fonts: {
        body: "Roboto, sans-serif",
        heading: "Roboto, sans-serif",
        monospace: "Roboto, sans-serif"
      }
    }
  }
];

require("dotenv").config();

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App themes={themes} />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
