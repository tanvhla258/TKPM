import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  // Add more reducers here if needed
});

export default rootReducer;
