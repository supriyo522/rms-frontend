import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import Login from './Components/Login';
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(

<React.StrictMode>
    <BrowserRouter>
    <app/>
    </BrowserRouter>
</React.StrictMode>,
(document.getElementById("root")));