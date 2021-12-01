import { DefaultTheme } from "styled-components";
import "./styled-components.d";

const theme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    gray: "#C4C4C4",
    black: "#000000",
    dimmed: "#DFDFDF",
    accent: "#ECBC22",

    backgrounds: {
      light: "#232323",
      normal: "#1A1A1A",
      dark: "#151515",
    },

    borders: {
      dark: "#151515",
    },
  },
  transitions: {
    ease: ".3s ease",
    easeFast: ".15s ease",
    easeInOut: ".3s ease-in-out",
  },
  elevation: {
    D1: "-10px 13px 9px -4px rgba(0, 0, 0, 0.25), 10px 13px 9px -4px rgba(0, 0, 0, 0.25)",
  },
};

export default theme;
