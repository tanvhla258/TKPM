import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

// Async thunk to fetch all books
export const fetchAllBookEntries = createAsyncThunk(
  "book/fetchAllBookEntries",
  async () => {
    try {
      const response = await axios.get("");
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
      .addCase(fetchAllBookEntries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllBookEntries.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchAllBookEntries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const bookActions = {
  ...bookSlice.actions,
  fetchAllBookEntries,
};

export default bookSlice.reducer;
