import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    darkBgColor: "#212529",
    lightTextColor: "#f8f9fa",
    moviesWrapDarkColor: "#5c5c5c",
    accent: "#ffba08",
    btnBgColor: "#b1b1b1",
    btnBgHoverColor: "#dadada",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter basename="/goit-react-hw-05-movies">
//       <ThemeProvider theme={theme}>
//         <App />
//         <GlobalStyle />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
