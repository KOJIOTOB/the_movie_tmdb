import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";

import {MoviesListCard, TvListCard} from "../component";
import {api_key, baseURL_search} from "../constans";

import './Home.css'

const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q');

    const getSearchMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results)
    }

    useEffect(() => {
        const searchMovies = `${baseURL_search}?${api_key}&query=${query}`;
        getSearchMovies(searchMovies);
    },[query])

    return (
        <div className={'container'}>
            <h2 className={'result'}>Результат поиска:<span>{query}</span></h2>
            <div className={'home'}>

            <div className={'movies_box'}>
                {movies.length === 0 && <p>Loading...</p>}
                {movies.length > 0 && movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            </div>
        </div>
    );
};

export default Search;