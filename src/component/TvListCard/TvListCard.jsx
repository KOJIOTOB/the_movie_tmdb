import {Link} from "react-router-dom";

import {base_IMG_w500} from "../../constans";

const TvListCard= ({movie, showLink = true}) => {

    return (
        <div className={'box_card'}>
            <img src={base_IMG_w500 + movie.poster_path} alt={movie.title}/>
            <p>{movie.name}</p>
            {showLink && <Link to={`/tv/${movie.id}`}>Подробнее</Link>}
        </div>
    );
};

export {TvListCard};