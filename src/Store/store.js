import { configureStore } from '@reduxjs/toolkit';
import jobPostDetailReducer from './singleJobPost';
import resultPostDetailsReducer from './singleResultPost';
import admitCardDetailsReducer from './singleAdmitCardPost';
import answerKeyDetailsReducer from './singleAnswerKeyPost';
import admissionDetailsReducer from './singleAdmissionPost';
import UpcommingDetailsReducer from './singleUpcommingPost';
import StatejobDetailsReducer from './singleStatePost';



const store = configureStore({
  reducer: {
    jobPostDetails: jobPostDetailReducer,
    resultPostDetails: resultPostDetailsReducer,
    admitCardDetails: admitCardDetailsReducer,
    answerKeyDetails: answerKeyDetailsReducer,
    admissionDetails: admissionDetailsReducer,
    upcommingDetails: UpcommingDetailsReducer,
    stateDetails: StatejobDetailsReducer,
  },
});

export default store;
