import { configureStore } from "@reduxjs/toolkit";
import bookingMovieReducer from "./bookingMovieReducer";

const store = configureStore({
  reducer: {
    bookingMovieReducer,
  },
});

export default store;
