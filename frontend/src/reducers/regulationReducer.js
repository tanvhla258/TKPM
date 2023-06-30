// regulationReducer.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  // switches: {
  //   switch1: true,
  //   switch2: true,
  //   switch3: true,
  // },
  regulations: [],
};

export const fetchAllRegulations = createAsyncThunk(
  "regulation/fetchAllRegulations",
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/regulations/list/all");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const regulationSlice = createSlice({
  name: "regulation",
  initialState,
  reducers: {
    // toggleSwitch(state, action) {
    //   const { switchId } = action.payload;
    //   console.log(switchId);
    //   state.switches[switchId] = !state.switches[switchId];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRegulations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllRegulations.fulfilled, (state, action) => {
        state.loading = false;
        state.regulations = action.payload;
      })
      .addCase(fetchAllRegulations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    }
});

export const regulationActions = {
  ...regulationSlice.actions,
  fetchAllRegulations,
// toggleSwitch
};
export default regulationSlice.reducer;
