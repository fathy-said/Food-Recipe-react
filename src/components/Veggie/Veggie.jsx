import React, { useEffect, useState } from "react";
import "./Veggie.css";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Veggie = () => {
    const [getVeggie, setVeggie] = useState([]);

    useEffect(() => {
        fetchAxios();
    }, []);

    let fetchAxios = async () => {
        let check = localStorage.getItem("veggie");
        if (check != null) {
            setVeggie(JSON.parse(check));
        } else {
            let res = await axios.get(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian `
            );
            localStorage.setItem("veggie", JSON.stringify(res.data.recipes));
            setVeggie(res.data.recipes);
        }
    };

    return (
        <div className="veggie-box">
            <h2 className="title">Our vegetarian Picks</h2>
            <Splide
                options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "4rem",
                    breakpoints: {
                        992: {
                            perPage: 2,
                            gap: "2rem",
                        },
                    },
                }}
            >
                {getVeggie.length ? (
                    getVeggie.map((recipe) => {
                        return (


                            <SplideSlide key={recipe.id}> <Fade bottom>
                                <Link to={"/recipe/" + recipe.id}>
                                    <div className="box">
                                        <p>{recipe.title} </p>
                                        <img src={recipe.image} alt="" />
                                    </div>
                                </Link></Fade>
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

export default Veggie;
