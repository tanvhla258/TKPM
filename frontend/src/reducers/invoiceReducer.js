import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  invoices: [],
  loading: false,
  error: null,
};

// Async thunk to fetch all books
export const fetchAllInvoice = createAsyncThunk(
  "invoice/fetchAllInvoice",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/invoices/list?page=0&size=20"
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllInvoice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllInvoice.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices = action.payload;
      })
      .addCase(fetchAllInvoice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const invoiceActions = {
  ...invoiceSlice.actions,
  fetchAllInvoice,
};

export default invoiceSlice.reducer;
