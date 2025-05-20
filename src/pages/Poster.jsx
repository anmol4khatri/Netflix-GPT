import VideoBackground from "../components/VideoBackground";
import VideoText from "../components/VideoText";
import { useSelector } from "react-redux";

const Poster = () => {

    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    if (!movies || movies.length === 0) return null;
    const mainMovie = movies[Math.floor(Math.random() * movies.length)];
    const { title, overview, id } = mainMovie;

    return(
        <div className="">
            <VideoText title={title} overview={overview} />  
            <VideoBackground movieID={id} /> 
        </div>
    );
};

export default Poster;
// bg-gradient-to-r from-black