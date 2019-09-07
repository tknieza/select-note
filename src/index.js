import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

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
  <ThemeProvider theme={theTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
