import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    signOut(state) {
      state.user = null;
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
