import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bookEntries: [],
  loading: false,
  error: null,
};

// Async thunk to fetch all books
export const fetchAllBookEntries = createAsyncThunk(
  "bookEntries/fetchAllBookEntries",
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/deliveries/add");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const bookEntrySlice = createSlice({
  name: "bookEntry",
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
        state.bookEntries = action.payload;
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const bookActions = {
  ...bookEntrySlice.actions,
  fetchAllBookEntries,
};

export default bookEntrySlice.reducer;
