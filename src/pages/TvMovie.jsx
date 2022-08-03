import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {api_key, base_IMG_w500, baseURLTv} from "../constans";

import './MoviePage.css'

const TvMovie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${baseURLTv}${id}?${api_key}`
        getMovie(movieUrl)
    },[id])
    return (
        <div className={'movie_page'}>
            {
                movie && (
                    <>
                        <div className={'images'}>
                            <img src={base_IMG_w500 + movie.poster_path} alt={movie.title}/>
                        </div>

                        <div className={'description'}>
                            <h1>{movie.name}</h1>
                            <p style={{width:'500px'}}>{movie.overview}</p>
                            <ul>
                                <li>Рейтинг: <span style={{color:'gold'}}>{movie.vote_average}</span></li>
                                <li>Популярность: <span style={{color:'gold'}}>{movie.popularity}</span></li>
                                <li>Дата релиза: <span style={{color:'gold'}}>{movie.first_air_date}</span></li>
                                <li>Озвучка: <span style={{color:'gold'}}>{movie.original_language}</span></li>
                                <li>Оригинальное название: <span style={{color:'gold'}}>{movie.original_name} min</span></li>
                                <li>Статус: <span style={{color:'gold'}}>{movie.status}</span></li>
                            </ul>
                            <div>
                                <div className={'tagLine'}>{movie.tagline}</div>
                            </div>
                            <img className={'imgLeft'} src={base_IMG_w500 + movie.backdrop_path} alt={movie.title}/>
                        </div>


                    </>
                )}
        </div>
    );
};

export {TvMovie};