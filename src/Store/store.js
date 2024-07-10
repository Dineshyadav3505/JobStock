import { configureStore } from '@reduxjs/toolkit';
import jobPostReducer from './allJobPost';
import jobPostDetailReducer from './singleJobPost';
import resultPostReducer from './allResultPost';
import resultPostDetailsReducer from './singleResultPost';
import admitCardReducer from './allAdmitCardPost';
import admitCardDetailsReducer from './singleAdmitCardPost';
import answerKeyPostReducer from './allAnswerKeyPost';
import answerKeyDetailsReducer from './singleAnswerKeyPost';
import admissionPostReducer from './allAdmissionPost';
import admissionDetailsReducer from './singleAdmissionPost';



const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
    jobPostDetails: jobPostDetailReducer,
    resultPost: resultPostReducer,
    resultPostDetails: resultPostDetailsReducer,
    admitCard: admitCardReducer,
    admitCardDetails: admitCardDetailsReducer,
    answerKeyPost: answerKeyPostReducer,
    answerKeyDetails: answerKeyDetailsReducer,
    admissionPost: admissionPostReducer,
    admissionDetails: admissionDetailsReducer,


  },
});

export default store;
