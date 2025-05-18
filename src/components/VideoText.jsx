const VideoText = ({title, overview}) => {
    return(
        <div className="w-md bg-black absolute top-100 left-15 z-10 text-white p-5">
            <h1 className="text-5xl mb-7">{title}</h1>
            <h3>{overview}</h3>
        </div>
    );
};

export default VideoText;