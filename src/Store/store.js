import { configureStore } from '@reduxjs/toolkit';
import jobPostReducer from './allJobPost';
import jobPostDetailReducer from './singleJobPost';
import resultPostReducer from './allResultPost';
import resultPostDetailsReducer from './singleResultPost';



const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
    jobPostDetails: jobPostDetailReducer,
    resultPost: resultPostReducer,
    resultPostDetails: resultPostDetailsReducer,

  },
});

export default store;
