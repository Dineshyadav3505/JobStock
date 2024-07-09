import { configureStore } from '@reduxjs/toolkit';
import jobPostReducer from './allJobPost';
import jobPosrDetailReducer from './singleJobPost';


const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
    jobPostDetails: jobPosrDetailReducer,
  },
});

export default store;
