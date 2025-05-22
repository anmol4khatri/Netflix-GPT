import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        tmdbResults: [],
    },
    reducers: {
        addtmdbResults(state, action){
            state.tmdbResults = action.payload;
        },
    }
});

export const { addtmdbResults } = searchSlice.actions;
export default searchSlice.reducer;