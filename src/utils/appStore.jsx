import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import showsReducer from "./showSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        shows: showsReducer,
    },
})

export default appStore;