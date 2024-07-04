import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
  auth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    processing: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
      state.auth = null;
    },
    login: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.auth = true;
    },
    issue: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      state.auth = false;
    },
    logout: (state) => {
      state.loading = false;
      state.error = null;
      state.data = null;
      state.auth = false;
    },
  },
});

export const { processing, login, issue, logout } = authSlice.actions;
export default authSlice.reducer;
