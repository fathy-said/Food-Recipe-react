import React from "react";

import "./MenuItem.css";
import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiHamburger, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const MenuItem = () => (
    <div className="menu-box gap-3 gap-md-5">
        <NavLink className="icon" to={"/cuisine/italian"}>
            <FaPizzaSlice />
            <h6>italian</h6>
        </NavLink>
        <NavLink className="icon" to={"/cuisine/american"}>
            <GiHamburger />
            <h6>american</h6>
        </NavLink>
        <NavLink className="icon" to={"/cuisine/thai"}>
            <GiChopsticks />
            <h6>thai</h6>
        </NavLink>
        <NavLink className="icon" to={"/cuisine/japanese"}>
            <GiNoodles />
            <h6>japanese</h6>
        </NavLink>
    </div>
);

export default MenuItem;
