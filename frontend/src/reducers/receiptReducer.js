import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  receipts: [],
  loading: false,
  error: null,
};

// Async thunk to fetch all books
export const fetchAllReceipt = createAsyncThunk(
  "receipt/fetchAllReceipt",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/receipts/list?page=0&size=20"
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const receiptSlice = createSlice({
  name: "receipt",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReceipt.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllReceipt.fulfilled, (state, action) => {
        state.loading = false;
        state.receipts = action.payload;
      })
      .addCase(fetchAllReceipt.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const receiptActions = {
  ...receiptSlice.actions,
  fetchAllReceipt,
};

export default receiptSlice.reducer;
