import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addpopularShows } from "../utils/showSlice";

const usePopularShows = () => {
    const dispatch = useDispatch();

    const getPopularShows = async() => {
        const data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        const results = json.results;
        dispatch(addpopularShows(results));
    };

    useEffect(()=>{
        getPopularShows();
    }, [])
};

export default usePopularShows;