const initialState = {
  books: [],
};

const bookSlice = createSlice({
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
export default bookReducer;
