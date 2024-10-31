import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; 
import userReducer from './reducers/userReducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    user: userReducer 
  }
});

export default store;
