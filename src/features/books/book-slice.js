import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    readingList: [],
    genreToFilter: "",
    genres: [],
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
    filterByGenre(state, action) {
      state.genreToFilter = action.payload;
    },
    setGenres(state, action) {
      state.genres = action.payload;
    },
  },
});

export const {
  addBookToReadingList,
  removeBookFromReadingList,
  filterByGenre,
  setGenres,
} = bookSlice.actions;

export default bookSlice.reducer;
