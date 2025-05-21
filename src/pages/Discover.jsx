import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const Discover = () => {
    
    const movies = useSelector(store => store?.movies);
    if (!movies || movies.length === 0) return null;
    
    return(
        <div className="bg-black">
            <div className="w-full pl-10 pr-10 relative z-20 -mt-56">
                {Array.isArray(movies?.nowPlayingMovies) && (
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                )}
                {Array.isArray(movies?.topRatedMovies) && (
                    <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                )}
                {Array.isArray(movies?.popularMovies) && (
                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                )}
                {Array.isArray(movies?.upcomingMovies) && (
                    <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
                )}
            </div>
        </div>
    );
};

export default Discover;