import { useEffect } from "react";
import { API_OPTIONS, PROXY_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addtopRatedShows } from "../utils/showSlice";

const useTopRatedShows = () => {
    const dispatch = useDispatch();

    const getTopRatedShows = async () => {
        const data = await fetch(`${PROXY_URL}/api/tv/top-rated`, API_OPTIONS);
        const json = await data.json();
        const results = json.results;
        dispatch(addtopRatedShows(results));
    };

    useEffect(() => {
        getTopRatedShows();
    }, [])
};

export default useTopRatedShows;