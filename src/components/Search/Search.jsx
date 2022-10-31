import React, { useState } from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Search = () => {
    let [getInput, setInput] = useState("");

    let navgate = useNavigate("");
    // on SubmitEvent
    let SubmitForm = (e) => {
        e.preventDefault();
        navgate("/searched/" + getInput);
    };
    //

    return (
        <div className="search-box">
            <form action="" onSubmit={SubmitForm}>
                <input
                    type="text"
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    placeholder="Text"
                    value={getInput}
                />
                <AiOutlineSearch />
            </form>
        </div>
    );
};

export default Search;
