import { useSelector } from "react-redux";
import ShowList from "./ShowList";

const BrowseShows = () => {
    const shows = useSelector(store => store?.shows);
    if (!shows || shows.length === 0) return null;


    return(
        <div className="bg-black w-full pl-10 pr-10 mt-20">
            {Array.isArray(shows?.airingToday) && (
                <ShowList title={"Airing Today"} shows={shows.airingToday} />
            )}
            {Array.isArray(shows?.popularShows) && (
                <ShowList title={"Popular"} shows={shows.popularShows} />
            )}
            {Array.isArray(shows?.topRatedShows) && (
                <ShowList title={"Top Rated"} shows={shows.topRatedShows} />
            )}
            {Array.isArray(shows?.onTheAir) && (
                <ShowList title={"On The Air"} shows={shows.onTheAir} />
            )}
        </div>
    );
};

export default BrowseShows;