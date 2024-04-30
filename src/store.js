import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/books/book-slice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
