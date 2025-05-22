import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import showsReducer from "./showSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        shows: showsReducer,
        search: searchReducer,
    },
})

export default appStore;