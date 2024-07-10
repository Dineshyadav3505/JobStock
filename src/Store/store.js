import { configureStore } from '@reduxjs/toolkit';
import jobPostReducer from './allJobPost';
import jobPostDetailReducer from './singleJobPost';
import resultPostReducer from './allResultPost';



const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
    jobPostDetails: jobPostDetailReducer,
    resultPost: resultPostReducer,
  },
});

export default store;
