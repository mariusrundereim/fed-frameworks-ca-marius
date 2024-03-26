import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "@mui/material";
// import { CssBaseline } from "@mui/material";
// import { themeOne } from "./ui/theme/index.tsx";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import Router from "./router/index.tsx";
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider theme={themeOne}>
//         <CssBaseline />
//         <Router />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
