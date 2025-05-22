import { useEffect } from "react";
import { API_OPTIONS, PROXY_URL } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlaying = () => {
    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        const data = await fetch(`${PROXY_URL}/api/movies/now-playing`, API_OPTIONS);
        const json = await data.json();
        const results = await json.results;
        dispatch(addnowPlayingMovies(results));
    };

    useEffect(() => {
        getNowPlaying();
    }, []);
};

export default useNowPlaying;