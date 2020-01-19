import * as THEMES from "@theme-ui/presets";

export default [
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
