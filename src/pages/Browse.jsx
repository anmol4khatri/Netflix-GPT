import Header from "../components/Header";
import Poster from "./Poster";
import useNowPlaying from "../hooks/useNowPlaying";
import Discover from "./Discover";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";

const Browse = () => {

  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();

  return (
    <div className="">
      <Header />
      <Poster />
      <Discover />
    </div>
  )
}

export default Browse;