// store.js

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
