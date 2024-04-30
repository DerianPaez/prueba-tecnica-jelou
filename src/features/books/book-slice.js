import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    readingList: [],
    query: "",
  },
  reducers: {
    addBookToReadingList(state, action) {
      if (state.readingList.find((book) => book.ISBN === action.payload.ISBN))
        return state;
      state.readingList = [...state.readingList, action.payload];
    },
    removeBookFromReadingList(state, action) {
      state.readingList = state.readingList.filter(
        (book) => book.ISBN !== action.payload.ISBN
      );
    },
  },
});

export const { addBookToReadingList, removeBookFromReadingList } =
  bookSlice.actions;

export default bookSlice.reducer;
