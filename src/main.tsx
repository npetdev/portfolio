import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
