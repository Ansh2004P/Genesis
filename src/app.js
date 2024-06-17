import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home";
import { BrowserRouter } from "react-router-dom";

// React Element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
);