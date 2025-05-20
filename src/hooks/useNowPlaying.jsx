import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlaying = () => {
    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        const results = await json.results;
        dispatch(addnowPlayingMovies(results));
    };

    useEffect(() => {
        getNowPlaying();
    }, []);
};


export default useNowPlaying;