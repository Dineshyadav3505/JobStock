import { configureStore } from '@reduxjs/toolkit';
import jobPostReducer from './jobpost';


const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
  },
});

export default store;
