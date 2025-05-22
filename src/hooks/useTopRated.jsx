import { useDispatch } from "react-redux";
import { API_OPTIONS, PROXY_URL } from "../utils/constants";
import { addtopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
    const dispatch = useDispatch();

    const getTopRated = async () => {
        const data = await fetch(`${PROXY_URL}/api/movies/top-rated`, API_OPTIONS);
        const json = await data.json();
        const top_rated_movies = await json.results;
        dispatch(addtopRatedMovies(top_rated_movies));
    };

    useEffect(() => {
        getTopRated();
    }, [])
};

export default useTopRated;