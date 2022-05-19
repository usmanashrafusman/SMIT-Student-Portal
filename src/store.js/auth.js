import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authenticate",
  initialState: { token: null, user: true, notification: { status: false, message: "" } },
  reducers: {
    logIn: (state, { payload }) => {
      state.token = payload.token;
      state.user_name = payload.user_name;
    },
    logOut: (state) => {
      state.token = null;
      state.user_name = null;
    },
    setNotification: (state, { payload }) => {
      state.notification = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut, setNotification } = authSlice.actions;

export default authSlice.reducer;
