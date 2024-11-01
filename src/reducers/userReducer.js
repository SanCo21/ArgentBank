import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  rememberMe : false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.rememberMe = action.payload.rememberMe;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
      state.rememberMe = false;
    },
    updateUserName(state, action) {
      if (state.user) {
        state.user.userName = action.payload;
      }
    },
  },
});

export const { setUser, signOut, updateUserName } = userSlice.actions;
export default userSlice.reducer;
