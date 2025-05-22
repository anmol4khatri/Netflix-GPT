import { FaSearch } from "react-icons/fa";
import genAi from "../utils/genAi";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtmdbResults } from "../utils/searchSlice";
import { API_OPTIONS } from "../utils/constants";
import ShowCard from "./ShowCard";


const Search = () => {

    const dispatch = useDispatch();
    const userInput = useRef();
    const final_results = useSelector((store) => store?.search?.tmdbResults);

    const handleSearch = async () => {
        const inputValue = userInput.current?.value?.trim();
        if (!inputValue) return;
        const response_array = await genAi(inputValue);

        const getTmdbResults = async (item) => {
            const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + item + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
            const json = await data.json();
            return json.results?.[0];
        }

        const promises = response_array.map((item) => getTmdbResults(item));
        const results = await Promise.all(promises);
        dispatch(addtmdbResults(results));
    };

    return (
        <div className=" bg-black text-white p-8 flex flex-col justify-center pt-28">
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 max-w-lg w-full">
                <input
                    ref={userInput}
                    type="text"
                    placeholder="What would you like to watch ?"
                    className="flex-1 bg-transparent text-xl font-semibold text-black placeholder-gray-400 outline-none px-2"
                />
                <button className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700"
                    onClick={handleSearch}>
                    <FaSearch className="w-5 h-5" />
                </button>
            </div>
            <h1 className="pt-10 pl-3 text-2xl font-semibold">Showing Similar Results Like "{userInput.current?.value?.trim()}"</h1>
            <div className="w-52 pl-3 flex gap-5 pt-7">
                {final_results.map((result) => <ShowCard poster={result.poster_path} key={result.id}/>)}
            </div>
        </div>
    );
};

export default Search;
