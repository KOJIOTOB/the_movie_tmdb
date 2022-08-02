import {Link} from "react-router-dom";
import {base_IMG_w500} from "../../constans";

import './MovieCard.css'

const MoviesListCard = ({movie, showLink = true}) => {

    return (
        <div className={'box_card'}>
            <img src={base_IMG_w500 + movie.poster_path} alt={movie.title}/>
            <p>{movie.original_title}</p>
            {showLink && <Link to={`/movie/${movie.id}`}>Подробнее</Link>}
        </div>
    );
};

export {MoviesListCard};