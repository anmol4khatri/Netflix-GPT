import Header from "../components/Header";
import BrowseShows from "../components/BrowseShows"
import useAiringToday from "../hooks/useAiringToday";
import useOnTheAir from "../hooks/useOnTheAir";
import usepopularShows from "../hooks/usepopularShows";
import useTopRatedShows from "../hooks/useTopRatedShows";

const TvShows = () => {
    useAiringToday();
    useOnTheAir();
    usepopularShows();
    useTopRatedShows();

    return(
        <div className="">
            <Header/>
            <BrowseShows/>
        </div>
    );
};

export default TvShows;