// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { authReducer } from "./reducer/auth.reducer";
// import { thunk } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice";

// const reducers=combineReducers({
//     auth:authReducer
// })
// export const store=createStore(reducers,applyMiddleware(thunk))

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
