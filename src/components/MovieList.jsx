import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <h1 className="text-3xl pt-10 pb-3 font-bold text-white">{title}</h1>

      <div className="relative group">
        {/* Scroll Buttons Overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 z-10 max-sm:hidden">
          <button
            onClick={() => scroll("left")}
            className="pointer-events-auto bg-white/80 hover:bg-white text-black p-2 rounded-full shadow cursor-pointer"
          >
            <FaChevronLeft size={30} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="pointer-events-auto bg-white/80 hover:bg-white text-black p-2 rounded-full shadow cursor-pointer"
          >
            <FaChevronRight size={30} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
