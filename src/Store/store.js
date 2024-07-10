import { configureStore } from '@reduxjs/toolkit';
import jobPostReducer from './allJobPost';
import jobPostDetailReducer from './singleJobPost';
import resultPostReducer from './allResultPost';
import resultPostDetailsReducer from './singleResultPost';
import admitCardReducer from './allAdmitCardPost';
import admitCardDetailsReducer from './singleAdmitCardPost';



const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
    jobPostDetails: jobPostDetailReducer,
    resultPost: resultPostReducer,
    resultPostDetails: resultPostDetailsReducer,
    admitCard: admitCardReducer,
    admitCardDetails: admitCardDetailsReducer,

  },
});

export default store;
