import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bookEntries: [],
  loading: false,
  successMessage: null, // Added field
  error: null, // Added field
};

// Async thunk to fetch all books
export const fetchAllBookEntries = createAsyncThunk(
  "bookEntries/fetchAllBookEntries",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/deliveries/list?page=0&size=30"
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export const addBookEntry = createAsyncThunk(
  "bookEntry/addBookEntry",
  async (newBook) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/deliveries/add",
        newBook
      );
      return { newBook: newBook, id: response.data.result.id };
    } catch (error) {
      throw error.response.data;
    }
  }
);
export const updateBookEntry = createAsyncThunk(
  "bookEntry/updateBookEntry",
  async ({ data, id }) => {
    console.log(data, id);
    try {
      const response = await axios.post(
        `http://localhost:8080/deliveries/update?id=${id}`,
        data
      );
      return { data: data, id: response.data.result.id };
    } catch (error) {
      throw error.response.data;
    }
  }
);
export const removeBookEntry = createAsyncThunk(
  "bookEntry/removeBookEntry",
  async (bookEntryId) => {
    try {
      await axios.post(
        `http://localhost:8080/deliveries/remove/${bookEntryId}`
      );
      return bookEntryId;
    } catch (error) {
      throw error.response.data;
    }
  }
);
const bookEntrySlice = createSlice({
  name: "bookEntry",
  initialState,
  reducers: {
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearMessages: (state) => {
      state.successMessage = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBookEntries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllBookEntries.fulfilled, (state, action) => {
        state.loading = false;
        state.bookEntries = action.payload;
      })
      .addCase(fetchAllBookEntries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(addBookEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBookEntry.fulfilled, (state, action) => {
        state.loading = false;
        state.bookEntries = {
          ...state.bookEntries,
          content: [
            ...state.bookEntries.content,
            { ...action.payload.newBook, id: action.payload.id },
          ],
        };
      })
      .addCase(addBookEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(updateBookEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBookEntry.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateBookEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(removeBookEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeBookEntry.fulfilled, (state, action) => {
        state.loading = false;
        const bookEntryId = action.payload;
        state.bookEntries.content = state.bookEntries.content.filter(
          (entry) => entry.id !== bookEntryId
        );
      })
      .addCase(removeBookEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const bookEntryActions = {
  ...bookEntrySlice.actions,
  fetchAllBookEntries,
  addBookEntry,
  removeBookEntry,
  updateBookEntry,
};

export default bookEntrySlice.reducer;
