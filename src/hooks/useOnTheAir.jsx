import { useEffect } from "react";
import { API_OPTIONS, PROXY_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addonTheAir } from "../utils/showSlice";

const useOnTheAir = () => {
    const dispatch = useDispatch();

    const getOnTheAir = async () => {
        const data = await fetch(`${PROXY_URL}/api/tv/on-the-air`, API_OPTIONS);
        const json = await data.json();
        const results = json.results;
        dispatch(addonTheAir(results));
    };

    useEffect(() => {
        getOnTheAir();
    }, [])
};

export default useOnTheAir;