import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ShowCard from "./ShowCard";

const ShowList = ({ title, shows }) => {
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
        {/* Scroll Buttons */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 z-10">
          <button
            onClick={() => scroll("left")}
            className="pointer-events-auto bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
          >
            <FaChevronLeft size={30} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="pointer-events-auto bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
          >
            <FaChevronRight size={30} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {shows.map((show) => (
            <ShowCard key={show.id} poster={show.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowList;
