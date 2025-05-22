import { Netflix_Logo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
        setIsMenuOpen(false);
    }

    const handleTvShows = () => {
        navigate("/tvshows");
        setIsMenuOpen(false);
    };
    const handleMovies = () => {
        navigate("/browse");
        setIsMenuOpen(false);
    };
    const handleAiSearch = () => {
        navigate("/ai_search");
        setIsMenuOpen(false);
    };

    return (
        <div className="absolute top-0 left-0 w-full flex justify-between z-15 bg-black">
            <div className="top-0 left-0 z-10 from-black flex gap-8">
                <img className="w-50 max-sm:w-30 max-sm:m-3" src={Netflix_Logo} alt="logo" />
                <div className="hidden md:flex gap-8 mt-7 mb-7 text-lg font-semibold text-white">
                    {/* conditional rendring based on the path */}
                    {location.pathname === "/browse"
                        ? <h3 className="cursor-pointer border-b-2 hover:border-b-2" onClick={handleMovies}>Movies</h3>
                        : <h3 className="cursor-pointer hover:border-b-2" onClick={handleMovies}>Movies</h3>}
                    {location.pathname === "/tvshows"
                        ? <h3 className="cursor-pointer border-b-2 hover:border-b-2" onClick={handleTvShows}>TV Shows</h3>
                        : <h3 className="cursor-pointer hover:border-b-2" onClick={handleTvShows}>TV Shows</h3>}
                    {location.pathname === "/ai_search"
                        ? <h3 className="cursor-pointer border-b-2 hover:border-b-2" onClick={handleAiSearch}>AI Powered Search</h3>
                        : <h3 className="cursor-pointer hover:border-b-2" onClick={handleAiSearch}>AI Powered Search</h3>}
                </div>
            </div>
            <div className="m-6 text-white flex gap-5 items-center">
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center gap-5">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABb0lEQVR4nO2VO05CQRiFr5hoIVr52AMsAqQ2iqJxCUQLtDGEWCmVj3UYOwkuw4iv1hAW4BMNsVA/M8kh3gYchrmFyT3JVPf7zzlzXxMEsWL9NwGzQBW4At61GsA+MBN1+CrQprdegZUow78VdAZkgAmtLFDTtS9gOYrb3lbATh+uLOYFmPZZoNrduQVbF7vns8C1TDMW7LzYhs8CbzJNWrCTYts+CzwPUGBK7JPPApcyzVqwObEXPgvsyrRmwZ6LrfgsMAc8yrjch6uIeTCfrrcCRubnAnwqoK63PamVC+3cMPkgCgEF/el6yVwrRBW+CNzztwyz4DN4BDgKBdwAJSAVOgvSwBZwK8acGQdm1keBY5l+AEUg0YdNABtijQ6HDc+HwjMDzGVDJZZcw8eBlkyKDvObmm0CYy4F1kPPPOEwPwrcyWPNpcCphksDD/96bMvjxGW4qeHUEAXS3U/TZbhjewJaHM0dV49YsYKo9QOixZ4KLtJpYwAAAABJRU5ErkJggg==" alt="gender-neutral-user"
                        className="cursor-pointer"></img>
                    <h4 className="font-semibold mr-2 mt-1.5 cursor-pointer hover:border-b-2" onClick={handleLogout}>Logout</h4>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 py-4">
                    <div className="flex flex-col items-center gap-4 text-lg font-semibold text-white">
                        <h3 className={`cursor-pointer ${location.pathname === "/browse" ? "border-b-2" : ""} hover:border-b-2`} onClick={handleMovies}>Movies</h3>
                        <h3 className={`cursor-pointer ${location.pathname === "/tvshows" ? "border-b-2" : ""} hover:border-b-2`} onClick={handleTvShows}>TV Shows</h3>
                        <h3 className={`cursor-pointer ${location.pathname === "/ai_search" ? "border-b-2" : ""} hover:border-b-2`} onClick={handleAiSearch}>AI Powered Search</h3>
                        <h3 className="cursor-pointer hover:border-b-2" onClick={handleLogout}>Logout</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;