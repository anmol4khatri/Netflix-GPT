import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: "null",
        teaserPlaying: "null",
        popularMovies: "null",
        topRatedMovies: "null",
    },
    reducers: {
        addnowPlayingMovies(state, action){
            state.nowPlayingMovies = action.payload;
        },
        addpopularMovies(state, action){
            state.popularMovies = action.payload;
        },
        addtopRatedMovies(state, action){
            state.topRatedMovies = action.payload;
        },
        addteaserPlaying(state, action){
            state.teaserPlaying = action.payload;
        }
    }
});

export const { addnowPlayingMovies, addteaserPlaying, addpopularMovies, addtopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;