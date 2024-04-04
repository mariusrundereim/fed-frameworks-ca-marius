import { createTheme } from "@mui/material";

export const themeOne = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#FF8585",
      light: "#FFC6C6",
      dark: "#C27070",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#545667",
      light: "#7F818D",
      dark: "#40424F",
      contrastText: "#0d0a0b",
    },
    success: {
      main: "#ABF0AA",
      light: "#D8F5D8",
      dark: "#92C891",
      contrastText: "#0d0a0b",
    },
  },
  typography: {
    fontFamily: `'Public Sans Variable', sans-serif`,
  },
  shape: {
    borderRadius: 3,
  },
});
