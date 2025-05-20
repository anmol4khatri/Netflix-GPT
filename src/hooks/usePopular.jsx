import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addpopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopular = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        const popular_movies = json.results;
        dispatch(addpopularMovies(popular_movies));
    };

    useEffect(()=>{
        getPopularMovies();
    }, []);
};

export default usePopular;