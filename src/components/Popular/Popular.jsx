import React, { useEffect, useState } from "react";
import "./popular.css";
import axios from "axios";

const Popular = () => {
    const [getPopular, setPopular] = useState([]);

    useEffect(() => {
        fetchAxios();
    }, []);

    let fetchAxios = async () => {
        let res = await axios.get(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        setPopular(res.data.recipes);
    };
    return (
        <div>
            {getPopular.length ? (
                getPopular.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <p>title :{recipe.title} </p>
                            <img src={recipe.image} alt="" />
                        </div>
                    );
                })
            ) : (
                <h2>notfound data</h2>
            )}
        </div>
    );
};

export default Popular;
