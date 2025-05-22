import { useDispatch } from "react-redux";
import { API_OPTIONS, PROXY_URL } from "../utils/constants";
import { addpopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopular = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(`${PROXY_URL}/api/movies/popular`, API_OPTIONS);
        const json = await data.json();
        const popular_movies = await json.results;
        dispatch(addpopularMovies(popular_movies));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopular;