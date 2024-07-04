// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { counterReducer } from "./reducer/counter.reducer";
// import { thunk } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter.slice";

// const reducers = combineReducers({
//   reducer: counterReducer,
// });

// export const store = createStore(reducers, {}, applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
