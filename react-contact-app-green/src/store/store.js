import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./reducer/auth.reducer";
import { thunk } from "redux-thunk";

const reducers=combineReducers({
    auth:authReducer
})
export const store=createStore(reducers,applyMiddleware(thunk))
