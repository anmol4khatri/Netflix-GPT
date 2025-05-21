import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className=" bg-black text-white p-8 flex justify-center pt-28">
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 max-w-lg w-full">
                <input
                    type="text"
                    placeholder="What would you like to watch ?"
                    className="flex-1 bg-transparent text-xl font-semibold text-black placeholder-gray-400 outline-none px-2"
                />
                <button className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700">
                    <FaSearch className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default Search;


