import React from "react";

import "./Navbar.css";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => (
    <div className="nav-bar mt-lg-5">
        <Link to="/">
            <GiKnifeFork />
            <h3>delicious</h3>
        </Link>
    </div>
);

export default Navbar;
