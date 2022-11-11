import React from "react";
import { HomePages, Cuisine, Searched, Recipe } from "./index";
import { Route, Routes } from "react-router-dom";
const Pages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/recipe/:name" element={<Recipe />} />
            </Routes>
        </>
    );
};

export default Pages;

