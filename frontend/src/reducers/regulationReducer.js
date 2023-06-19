// regulationReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  switches: {
    switch1: true,
    switch2: true,
    switch3: true,
  },
};

const regulationSlice = createSlice({
  name: "regulation",
  initialState,
  reducers: {
    toggleSwitch(state, action) {
      const { switchId } = action.payload;
      console.log(switchId);
      state.switches[switchId] = !state.switches[switchId];
    },
  },
});

export const { toggleSwitch } = regulationSlice.actions;
export default regulationSlice.reducer;
