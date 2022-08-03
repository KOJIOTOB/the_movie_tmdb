import {api_key, baseURL_person} from "../constans";

import {useEffect, useState} from "react";

import {PersonCardList} from "../component";

import "./Home.css"

const Person = () => {
    const [movies, setMovies] = useState([])

    const getMoviesURL = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results)
    }

    useEffect(() => {
        const getMovies = `${baseURL_person}popular?${api_key}`
        getMoviesURL(getMovies);
    },[])
    return (
        <div className={'home'}>

            <div className={'movies_box'}>

                {movies.length === 0 && <p>Loading...</p>}
                {movies.length > 0 && movies.map((movie) => <PersonCardList key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Person};