import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ChangeWindowProvider from "./context/change-window/change-window-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChangeWindowProvider>
      <App />
    </ChangeWindowProvider>
  </React.StrictMode>
);
