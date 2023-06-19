import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import regulationReducer from "./regulationReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  regulations: regulationReducer,
  // Add more reducers here if needed
});

export default rootReducer;
