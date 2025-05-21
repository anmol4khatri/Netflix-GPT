import {IMG_CDN_PREFIX} from "../utils/constants";

const ShowCard = ({poster}) => {
    if (!poster) return null;
    
    return(
        <div className="min-w-50">
            <img className="rounded-xl" src={IMG_CDN_PREFIX + poster} alt="Poster" />
        </div>
    );
};

export default ShowCard;