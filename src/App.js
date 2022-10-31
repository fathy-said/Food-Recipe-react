import React from "react";
import Pages from "./Pages/Pages";
import "./App.css";
import { Menuitem, Search, Navbar } from "./components/index";
import { BrowserRouter } from "react-router-dom";

const App = () => (
    <div className="container">
        <BrowserRouter>
            <Navbar />
            <Search />
            <Menuitem />
            <Pages />
        </BrowserRouter>
    </div>
);

export default App;
