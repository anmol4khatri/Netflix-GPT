import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addairingToday } from "../utils/showSlice";

const useAiringToday = () => {
    const dispatch = useDispatch();

    const getAiringToday = async() => {
        const data = await fetch("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        const results = json.results;
        dispatch(addairingToday(results));
    };

    useEffect(()=>{
        getAiringToday();
    }, [])
};

export default useAiringToday;