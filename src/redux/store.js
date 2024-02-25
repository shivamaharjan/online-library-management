import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import bookReducer from "./books/bookSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,

  },
});