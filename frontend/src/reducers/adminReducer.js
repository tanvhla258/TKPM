import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  admin: null,
  loading: false,
  error: null,
};

export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (credentials, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    // You can customize this payload as per your requirements
    localStorage.setItem("currentUser", { ...credentials });
    return credentials;
  }
);

export const getAdmin = createAsyncThunk(
  "admin/getAdmin",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/admin"); // Replace "/api/admin" with your actual API endpoint for fetching admin data
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(getAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const adminActions = {
  ...adminSlice.actions,
  loginAdmin,
  getAdmin,
};

export default adminSlice.reducer;
