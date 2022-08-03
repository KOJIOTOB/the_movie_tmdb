import {Link} from "react-router-dom";

import {base_IMG_w500, baseURL_person} from "../../constans";



const PersonCardList = ({movie, showLink = true}) => {


    return (
        <div className={'box_card'}>
            <img src={base_IMG_w500 + movie.profile_path } alt={movie.title}/>
            <p>{movie.name}</p>
            {showLink && <Link to={`/person/${movie.id}`}>Подробнее</Link>}
        </div>
    );
};

export {PersonCardList};