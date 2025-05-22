import { useEffect } from "react";
import { API_OPTIONS, PROXY_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addpopularShows } from "../utils/showSlice";

const usePopularShows = () => {
    const dispatch = useDispatch();

    const getPopularShows = async () => {
        const data = await fetch(`${PROXY_URL}/api/tv/popular`, API_OPTIONS);
        const json = await data.json();
        const results = json.results;
        dispatch(addpopularShows(results));
    };

    useEffect(() => {
        getPopularShows();
    }, [])
};

export default usePopularShows;