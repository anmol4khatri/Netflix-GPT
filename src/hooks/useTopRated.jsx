import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addtopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
    const dispatch = useDispatch();

    const getTopRated = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        const top_rated_movies = await json.results;
        dispatch(addtopRatedMovies(top_rated_movies));
    };

    useEffect(()=>{
        getTopRated();
    }, [])
};

export default useTopRated;