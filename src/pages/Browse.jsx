import Header from "../components/Header";
import Poster from "./Poster";
import useNowPlaying from "../hooks/useNowPlaying";

const Browse = () => {

  useNowPlaying();

  return (
    <div className="">
      <Header />
      <Poster />
    </div>
  )
}

export default Browse;