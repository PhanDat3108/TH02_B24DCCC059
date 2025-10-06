import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const goc = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
goc.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
