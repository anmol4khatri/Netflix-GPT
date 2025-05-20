import Header from "../components/Header";
import Poster from "./Poster";
import useNowPlaying from "../hooks/useNowPlaying";
import Discover from "./Discover";
import usePopular from "../hooks/usePopular";

const Browse = () => {

  useNowPlaying();
  usePopular();

  return (
    <div className="">
      <Header />
      <Poster />
      <Discover />
    </div>
  )
}

export default Browse;