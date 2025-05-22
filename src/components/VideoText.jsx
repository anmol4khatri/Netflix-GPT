const VideoText = ({ title, overview }) => {
    return (
        <div className="w-full aspect-video absolute z-10 text-white p-5 bg-gradient-to-r from-black max-sm:-top-4">
            <div className="w-full md:w-2/5 pt-[10%] md:pt-[18%] px-4 md:pl-10">
                <h1 className="text-2xl md:text-5xl mb-4 md:mb-7 font-extrabold">{title}</h1>
                <h3 className="text-sm md:text-base font-semibold line-clamp-3 md:line-clamp-none">{overview}</h3>
                <div className="flex gap-4 md:gap-6 mt-4 md:mt-5 cursor-pointer">
                    <div className="h-10 md:h-12 flex bg-white text-black p-2 md:p-3 rounded-xl cursor-pointer hover:scale-110 md:hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z"></path></svg>
                        <button className="w-13 cursor-pointer text-sm md:text-base">Play</button>
                    </div>
                    <div className="h-10 md:h-12 flex bg-[#47484a] p-2 md:p-3 rounded-xl cursor-pointer hover:scale-110 md:hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" className="w-5 h-5 md:w-6 md:h-6"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path></svg>
                        <button className="w-23 cursor-pointer text-sm md:text-base">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoText;