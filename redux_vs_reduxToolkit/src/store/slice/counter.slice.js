import { createSlice } from "@reduxjs/toolkit";
import { decrease } from "../action/counter.action";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decreasing: (state) => {
      state.value -= 1;
    },
    increaseWithPayLoad: (state, action) => {
      state.value += action.payload;
    },
    decreaseWithPayload:(state,action) => {
        state.value-=action.payload
    }
  },
});
export const { increase, decreasing, increaseWithPayLoad,decreaseWithPayload } = counterSlice.actions;
export default counterSlice.reducer;
