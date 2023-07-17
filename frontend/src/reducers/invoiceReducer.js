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
export const addInvoice = createAsyncThunk(
  "invoice/addInvoice",
  async (newInvoice) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/invoices/add",
        newInvoice
      );
      return newInvoice;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export const removeInvoice = createAsyncThunk(
  "invoice/removeInvoice",
  async (invoiceId) => {
    try {
      await axios.post(`http://localhost:8080/deliveries/remove/${invoiceId}`);
      return invoiceId;
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
    builder
      .addCase(addInvoice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addInvoice.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices.content.push(action.payload);
      })
      .addCase(addInvoice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(removeInvoice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeInvoice.fulfilled, (state, action) => {
        state.loading = false;
        const invoiceId = action.payload;
        state.invoices.content = state.invoices.content.filter(
          (entry) => entry.id !== invoiceId
        );
      })
      .addCase(removeInvoice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const invoiceActions = {
  ...invoiceSlice.actions,
  fetchAllInvoice,
  addInvoice,
  removeInvoice,
};

export default invoiceSlice.reducer;
