import React from "react";
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import "./styles.css";
import {AppGTC} from './AppGTC'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppGTC/>
  </BrowserRouter>
);
