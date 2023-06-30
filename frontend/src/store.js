import { configureStore } from "@reduxjs/toolkit";
import regulationReducer from "./reducers/regulationReducer";
import bookReducer from "./reducers/bookReducer";
import userReducer from "./reducers/userReducer";
import receiptReducer from "./reducers/receiptReducer";
const store = configureStore({
  reducer: {
    regulation: regulationReducer,
    book: bookReducer,
    user: userReducer,
    receipt: receiptReducer,
  },
});

export default store;
