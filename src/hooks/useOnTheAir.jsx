import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addonTheAir } from "../utils/showSlice";

const useOnTheAir = () => {
    const dispatch = useDispatch();

    const getOnTheAir = async() => {
        const data = await fetch("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        const results = json.results;
        dispatch(addonTheAir(results));
    };

    useEffect(()=>{
        getOnTheAir();
    }, [])
};

export default useOnTheAir;