import axios from "axios";

import {api_key, baseURL} from "../constans/urls";

const axiosService = axios.create({baseURL:baseURL});

const getMovies = () => axiosService('/movie/').then(value => value.data);

const getMovieId = (id) => axiosService('/movie/' + id).then(value => value.data);


export {axiosService, getMovies, getMovieId, api_key}