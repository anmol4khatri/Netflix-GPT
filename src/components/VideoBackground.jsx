import { useSelector } from "react-redux";
import useClips from "../hooks/useClips";

const VideoBackground = ({ movieID }) => {

    useClips(movieID);
    const key = useSelector((store) => store?.movies?.teaserPlaying);

    return (
        <div className="w-full aspect-video">
            <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&playlist=${key}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0`}
                title="Video"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
                frameBorder="0"
                style={{ pointerEvents: 'none' }}
            ></iframe>
        </div>
    );
};

export default VideoBackground;