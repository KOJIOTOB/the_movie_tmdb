import {api_key, baseURLTv} from "../constans";

import {useEffect, useState} from "react";


import {TvListCard} from "../component";

const Tv = () => {
    const [moviesTv, setMoviesTv] = useState([])

    const getMoviesURL = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMoviesTv(data.results)
    }

    useEffect(() => {
        const getMoviesTv = `${baseURLTv}popular?${api_key}`
        getMoviesURL(getMoviesTv);

    },[])
    return (
        <div className={'home'}>

            <div className={'movies_box'}>

                {moviesTv.length === 0 && <p>Loading...</p>}
                {moviesTv.length > 0 && moviesTv.map((movie) => <TvListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Tv};