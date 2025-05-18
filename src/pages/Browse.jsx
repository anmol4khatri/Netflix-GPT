import Header from "../components/Header";
import Poster from "../components/Poster";
import useNowPlaying from "../hooks/useNowPlaying";

const Browse = () => {

  useNowPlaying();

  return (
    <div className="bg-black">
      <Header />
      <Poster />
      {/*
        Poster
        Discover
      */}
    </div>
  )
}

export default Browse;