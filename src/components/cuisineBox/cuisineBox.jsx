import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./cuisineBox.css";
import Fade from 'react-reveal/Fade';

const CuisineBox = () => {
    const [getcuisine, setCuisine] = useState([]);
    let params = useParams();
    useEffect(() => {
        cuisineAxios(params.type);
    }, [params.type]);
    let cuisineAxios = async (name) => {
        let res = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        );

        setCuisine(res.data.results);
    };
    return (
        <div className="cuisine-box">
            {getcuisine.map((el) => {
                return (
                    <Fade bottom key={el.id}>
                        <div className="box" >
                            <Link to={"/recipe/" + el.id}>
                                <img src={el.image} alt={el.title} />
                            </Link>
                            <h4>{el.title}</h4>
                        </div>
                    </Fade>
                );
            })}
        </div>
    );
};

export default CuisineBox;
