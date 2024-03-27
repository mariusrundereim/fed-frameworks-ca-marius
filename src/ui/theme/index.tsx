import { createTheme } from "@mui/material";

export const themeOne = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#00509d",
      light: "#003f88",
      dark: "#00296b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffd500",
      light: "#91a8a8",
      dark: "#fdc500",
      contrastText: "#0d0a0b",
    },
  },
  shape: {
    borderRadius: 3,
  },
});
