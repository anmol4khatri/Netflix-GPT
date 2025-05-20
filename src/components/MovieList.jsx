import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    return (
        <div className="">
            <h1 className="text-3xl pt-10 pb-3 font-bold text-white">{title}</h1>
            <div className="flex gap-5 flex-nowrap overflow-x-auto">
                {movies.map((movie) => (
                <MovieCard key={movie.id} poster={movie.poster_path} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;