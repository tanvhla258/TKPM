import { configureStore } from "@reduxjs/toolkit";
import regulationReducer from "./reducers/regulationReducer";
import bookReducer from "./reducers/bookReducer";

const store = configureStore({
  reducer: {
    regulation: regulationReducer,
    book: bookReducer,
  },
});

export default store;
