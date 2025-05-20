import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: "null",
        teaserPlaying: "null",
    },
    reducers: {
        addnowPlayingMovies(state, action){
            state.nowPlayingMovies = action.payload;
        },
        addteaserPlaying(state, action){
            state.teaserPlaying = action.payload;
        }
    }
});

export const { addnowPlayingMovies, addteaserPlaying } = movieSlice.actions;
export default movieSlice.reducer;