import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
    name: "shows",
    initialState: {
        airingToday: "null",
        onTheAir: "null",
        popularShows: "null",
        topRatedShows: "null",
    },
    reducers: {
        addairingToday(state, action){
            state.airingToday = action.payload;
        },
        addonTheAir(state, action){
            state.onTheAir = action.payload;
        },
        addpopularShows(state, action){
            state.popularShows = action.payload;
        },
        addtopRatedShows(state, action){
            state.topRatedShows = action.payload;
        },
    }
});

export const { addairingToday, addonTheAir, addpopularShows, addtopRatedShows } = showSlice.actions;
export default showSlice.reducer;