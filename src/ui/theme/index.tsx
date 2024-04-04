import { createTheme } from "@mui/material";

export const themeOne = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#489D90",
      light: "#D0EFEF",
      dark: "#254944",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFEDAD",
      light: "#FFF7DA",
      dark: "#CCC19B",
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
