import { createTheme } from "@mui/material";

export const themeOne = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#345A54",
      light: "#D0EFEF",
      dark: "#0A3439",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FEBE98",
      light: "#FFE6D8",
      dark: "#D19E80",
      contrastText: "#0d0a0b",
    },
  },
  shape: {
    borderRadius: 3,
  },
});
