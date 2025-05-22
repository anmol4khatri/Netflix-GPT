import { useDispatch } from "react-redux";
import { API_OPTIONS, PROXY_URL } from "../utils/constants";
import { addupcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcoming = () => {
    const dispatch = useDispatch();

    const getUpcoming = async () => {
        const data = await fetch(`${PROXY_URL}/api/movies/upcoming`, API_OPTIONS);
        const json = await data.json();
        const upcoming_movies = await json.results;
        dispatch(addupcomingMovies(upcoming_movies));
    }

    useEffect(() => {
        getUpcoming();
    }, []);
};

export default useUpcoming;