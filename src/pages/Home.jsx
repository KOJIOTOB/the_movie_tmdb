import {api_key, base_IMG_w500, baseURL} from "../constans";

import {useEffect, useState} from "react";

import {MoviesListCard} from "../component";

import "./Home.css"
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState([])

    const getMoviesURL = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results)
    }

useEffect(() => {
    const getMovies = `${baseURL}popular?${api_key}`
    getMoviesURL(getMovies)

},[])

    return (
        <div className={'home'}>
            <div className={'movies_box'}>
                {movies.length === 0 && <p>Loading...</p>}
                {movies.length > 0 && movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Home};