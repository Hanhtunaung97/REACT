import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer/countReducer";

const combine = combineReducers({
  counter: counterReducer,
});

const store = createStore(combine);

export default store;
