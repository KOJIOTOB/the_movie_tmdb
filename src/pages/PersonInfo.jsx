import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {api_key, base_IMG_w500, baseURL_person} from "../constans";

import './MoviePage.css'

const PersonInfo = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${baseURL_person}${id}?${api_key}`
        getMovie(movieUrl)
    },[id])
    return (
        <div className={'movie_page'}>
            {
                movie && (
                    <>
                        <div className={'images'}>
                            <img src={base_IMG_w500 + movie.profile_path} alt={movie.title}/>
                        </div>

                        <div className={'description'}>
                            <h1>{movie.name}</h1>
                            <p style={{width:'500px'}}>{movie.name}</p>
                            <ul style={{position:'relative', left:'10px', minHeight:'600px'}}>
                                <li>Биография: <span style={{color:'gold'}}>{movie.biography}</span></li>
                                <li>Дата Рождения: <span style={{color:'gold'}}>{movie.birthday}</span></li>
                                <li>Место Рождения: <span style={{color:'gold'}}>{movie.place_of_birth}</span></li>
                                <li>Популярность: <span style={{color:'gold'}}>{movie.popularity}</span></li>
                                <li>Известный Отдел: <span style={{color:'gold'}}>{movie.known_for_department}</span></li>
                            </ul>
                        </div>


                    </>
                )}
        </div>
    );
};

export {PersonInfo};