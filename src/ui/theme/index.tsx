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
    borderRadius: 25,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFormHelperText-root": {
            fontSize: "1rem",
            paddingLeft: "10px",
          },
          // Add padding to the input element
          "& .MuiInputBase-input": {
            paddingLeft: "10px", // Adjust this value as needed
          },
          // Adjust the label position
          "& .MuiInputLabel-root": {
            marginLeft: "10px", // Adjust this value as needed
          },
          // If the label is floating above (when the TextField is focused or filled)
          "& .MuiInputLabel-shrink": {
            transform: "translate(10px, -6px) scale(0.75)", // Adjust translation as needed
          },
        },
      },
    },
  },
});
