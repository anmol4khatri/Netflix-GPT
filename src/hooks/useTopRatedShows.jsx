import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addtopRatedShows } from "../utils/showSlice";

const useTopRatedShows = () => {
    const dispatch = useDispatch();

    const getTopRatedShows = async() => {
        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        const results = json.results;
        dispatch(addtopRatedShows(results));
    };

    useEffect(()=>{
        getTopRatedShows();
    }, [])
};

export default useTopRatedShows;