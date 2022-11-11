import React, { useEffect, useState } from "react";
import "./popular.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Fade from 'react-reveal/Fade';

const Popular = () => {
    const [getPopular, setPopular] = useState([]);

    useEffect(() => {
        fetchAxios();
    }, []);

    let fetchAxios = async () => {
        let check = localStorage.getItem("popular");
        if (check != null) {
            setPopular(JSON.parse(check));
        } else {
            let res = await axios.get(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
            );
            localStorage.setItem("popular", JSON.stringify(res.data.recipes));
            setPopular(res.data.recipes);
        }
    };

    return (
        <div className="popular-box">
            <h2 className="title">Trending</h2>
            <Splide
                options={{
                    perPage: 4,

                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "4rem",

                    breakpoints: {
                        992: {
                            perPage: 2,
                        },
                        640: {
                            perPage: 1,
                        },
                    },
                }}
            >
                {getPopular.length ? (
                    getPopular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Fade bottom>


                                    <Link to={"recipe/" + recipe.id}>
                                        <div className="box">
                                            <p>{recipe.title} </p>
                                            <img src={recipe.image} alt="" />
                                        </div>
                                    </Link>
                                </Fade>
                            </SplideSlide>
                        );
                    })
                ) : (
                    <h2>notfound data</h2>
                )}
            </Splide>
        </div>
    );
};

export default Popular;
