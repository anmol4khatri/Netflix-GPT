import { useSelector } from "react-redux";
import useClips from "../hooks/useClips";

const VideoBackground = ({ movieID }) => {

    useClips(movieID);
    const key = useSelector((store) => store?.movies?.teaserPlaying);

    return (
        <div className="w-full aspect-video bg-black">
            <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&controls=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground;