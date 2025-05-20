import Header from "../components/Header";
import Poster from "./Poster";
import useNowPlaying from "../hooks/useNowPlaying";
import Discover from "./Discover";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";

const Browse = () => {

  useNowPlaying();
  usePopular();
  useTopRated();

  return (
    <div className="">
      <Header />
      <Poster />
      <Discover />
    </div>
  )
}

export default Browse;