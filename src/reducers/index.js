import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Importez vos réducteurs

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

export default rootReducer;
