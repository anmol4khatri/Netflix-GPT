import { useEffect } from "react";
import { API_OPTIONS, PROXY_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addairingToday } from "../utils/showSlice";

const useAiringToday = () => {
    const dispatch = useDispatch();

    const getAiringToday = async () => {
        const data = await fetch(`${PROXY_URL}/api/tv/airing-today`, API_OPTIONS);
        const json = await data.json();
        const results = json.results;
        dispatch(addairingToday(results));
    };

    useEffect(() => {
        getAiringToday();
    }, [])
};

export default useAiringToday;