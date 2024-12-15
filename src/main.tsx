import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";

import { colorBanner } from "./style_components/constants.tsx";

document.documentElement.style.setProperty("--background-color", colorBanner);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
