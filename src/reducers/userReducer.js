import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, fetchUserData } from "../API/userService";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    const response = await login({ email, password });
    return response;
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserData",
  async (token) => {
    const response = await fetchUserData(token);
    return response;
  }
);

const initialState = {
  user: null,
  token: null,
  rememberMe: false,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.rememberMe = action.payload.rememberMe;
      console.log('User set:', state.user);
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

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.body.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUser, signOut, updateUserName } = userSlice.actions;
export default userSlice.reducer;
