import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlaying = () => {
    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        const results = await json.results;
        dispatch(addnowPlayingMovies(results));
        console.log(results);
    };

    useEffect(() => {
        getNowPlaying();
    }, []);
};


export default useNowPlaying;

// 0
// {
//     "adult": false,
//     "backdrop_path": "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
//     "genre_ids": [
//         10751,
//         35,
//         12,
//         14
//     ],
//     "id": 950387,
//     "original_language": "en",
//     "original_title": "A Minecraft Movie",
//     "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
//     "popularity": 868.2685,
//     "poster_path": "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
//     "release_date": "2025-03-31",
//     "title": "A Minecraft Movie",
//     "video": false,
//     "vote_average": 6.528,
//     "vote_count": 1197
// }