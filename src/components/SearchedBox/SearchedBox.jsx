import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./SearchedBox.css";
const SearchedBox = () => {
    const [getQuery, setQuery] = useState([]);
    let params = useParams();
    useEffect(() => {
        searchAxios(params.search);
    }, [params.search]);
    let searchAxios = async (name) => {
        let res = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );

        setQuery(res.data.results);
    };
    return (
        <>
            <div className="searched-box">
                {getQuery.map((el) => {
                    return (
                        <div className="box" key={el.id}>
                            <Link to={"/recipe/" + el.id}>
                                <img src={el.image} alt={el.title} />
                            </Link>
                            <h4>{el.title}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SearchedBox;
