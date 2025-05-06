import React from "react";
import ReactDOM from "react-dom/client";
//import { AppGTC } from "./AppGTC";
import "./styles.css";
import { LandingPage } from "./components/Landing/LandingPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
