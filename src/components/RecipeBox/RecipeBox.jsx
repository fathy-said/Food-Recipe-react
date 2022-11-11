import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';

import "./RecipeBox.css";
const RecipBox = () => {
    let params = useParams();
    const [getActive, setActive] = useState("instructions");
    const [getDetails, setDetails] = useState({});

    let detailsAxios = async (name) => {
        let res = await axios.get(
            `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setDetails(res.data);
    };
    useEffect(() => {
        detailsAxios(params.name);
    }, [params.name]);
    return (
        <div className="recipe-box row gap-5 gap-lg-0 ">
            <Fade bottom>

                <div className="box-left  col-lg-5">
                    <h2>{getDetails.title}</h2>
                    <img src={getDetails.image} alt="" />
                </div></Fade>
            <div className="box-right col-lg- col-lg-6">
                <div className="bt-box">
                    <button
                        className={getActive === "instructions" ? "active" : ""}
                        onClick={() => {
                            setActive("instructions");
                        }}
                    >
                        instructions
                    </button>
                    <button
                        className={getActive === "ingredients" ? "active" : ""}
                        onClick={() => {
                            setActive("ingredients");
                        }}
                    >
                        ingredients
                    </button>
                </div>
                <Fade bottom>

                    <div className={getActive === "instructions" ? "active" : ""}>
                        <p
                            dangerouslySetInnerHTML={{ __html: getDetails.summary }}
                        ></p>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: getDetails.instructions,
                            }}
                        ></p>
                    </div>

                    <div className={getActive === "ingredients" ? "active" : ""}>
                        <ul>
                            {getDetails.extendedIngredients
                                ? getDetails.extendedIngredients.map((el) => (
                                    <li key={el.id + 100}>{el.original}</li>
                                ))
                                : null}
                        </ul>
                    </div></Fade>
            </div>
        </div>
    );
};

export default RecipBox;
// <h1>{getDetails.title}</h1> <img src={getDetails.image} alt="" />
// ;
