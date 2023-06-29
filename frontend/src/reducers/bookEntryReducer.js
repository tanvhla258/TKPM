import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

// Async thunk to fetch all books
export const fetchAllBooks = createAsyncThunk(
  "book/fetchAllBooks",
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/books/list/all");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const bookActions = {
  ...bookSlice.actions,
  fetchAllBooks,
};

export default bookSlice.reducer;
