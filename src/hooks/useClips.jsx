import { useEffect } from "react";
import { API_OPTIONS, PROXY_URL } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addteaserPlaying } from "../utils/movieSlice";

const useClips = (movieID) => {

    const dispatch = useDispatch();

    const getClips = async () => {
        if (!movieID) return;
        const clips = await fetch(`${PROXY_URL}/api/movies/${movieID}/videos`, API_OPTIONS);
        const json = await clips.json();
        const selectedClip = json.results.filter(result =>
            ["Teaser", "Trailer", "Clip"].includes(result.type)
        );
        const key = selectedClip[0].key;
        dispatch(addteaserPlaying(key));
    };
    useEffect(() => {
        getClips();
    }, [movieID]);

};

export default useClips;