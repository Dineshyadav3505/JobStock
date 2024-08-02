import React from 'react';
import ReactGA from 'react-ga';
import { Routes, Route } from 'react-router-dom';

// Importing components
import Home from './Components/WebPage/Job/Home';
import AdmitCard from './Components/WebPage/AdmitCard/AdmitCard';
import Result from './Components/WebPage/Result/Result';
import JobDetails from './Components/WebPage/Job/JobDetails';
import Admission from './Components/WebPage/Admission/Admission';
import AnswerKey from './Components/WebPage/AnswerKey/AnswerKey';
import ResultDetails from './Components/WebPage/Result/ResultDetails';
import AdmitCardDetails from './Components/WebPage/AdmitCard/AdmitCardDetails';
import AnswerKeyDetails from './Components/WebPage/AnswerKey/AnswerKeyDetails';
import AdmissionDetails from './Components/WebPage/Admission/AdmissionDetails';
import Upcomming from './Components/WebPage/Upcomming/Upcomming';
import StateJob from './Components/WebPage/StateJob/Statejob';
import StatejobDetails from './Components/WebPage/StateJob/StatejobDetails';
import LogIn from './Components/WebPage/LogIn/LogIn';
import ProtectedRoute from './utils/ProtectedRoute';
import UpcommingDetails from './Components/WebPage/Upcomming/UpcommingDetails';
import AboutUs from './Components/WebPage/ViewPages/AboutUs';
import ContactUs from './Components/WebPage/ViewPages/ContactUs';
import HelpSupport from './Components/WebPage/ViewPages/Help&Support';
import PrivacyPolicy from './Components/WebPage/ViewPages/Policy';
import TermsConditions from './Components/WebPage/ViewPages/Terms&Conditions';


import Admin from './Components/admin/AdminWebPage/Job/Home';
import AdminJobDetails from './Components/admin/AdminWebPage/Job/JobDetails';
import AdminResult from './Components/admin/AdminWebPage/Result/Result';
import AdminAdmitCard from './Components/admin/AdminWebPage/AdmitCard/AdmitCard';
import AdminResultDetails from './Components/admin/AdminWebPage/Result/ResultDetails';
import AdminAdmitCardDetails from './Components/admin/AdminWebPage/AdmitCard/AdmitCardDetails';
import AdminUpcomming from './Components/admin/AdminWebPage/Upcomming/Upcomming';
import AdminUpcommingDetails from './Components/admin/AdminWebPage/Upcomming/UpcommingDetails';
import AdminAdmission from './Components/admin/AdminWebPage/Admission/Admission';
import AdminAdmissionDetails from './Components/admin/AdminWebPage/Admission/AdmissionDetails';
import AdminAnswerKey from './Components/admin/AdminWebPage/AnswerKey/AnswerKey';
import AdminAnswerKeyDetails from './Components/admin/AdminWebPage/AnswerKey/AnswerKeyDetails';
import AdminStateJob from './Components/admin/AdminWebPage/StateJob/Statejob';
import AdminStateJobDetails from './Components/admin/AdminWebPage/StateJob/StatejobDetails';




import JobPost from './Components/admin/AdminWebPage/Job/JobPost';
import StatePost from './Components/admin/AdminWebPage/StateJob/StatePost';
import ResultPost from './Components/admin/AdminWebPage/Result/ResultPost';
import AdmitCardPost from './Components/admin/AdminWebPage/AdmitCard/AdmitCardPost';
import AdmissionPost from './Components/admin/AdminWebPage/Admission/AdmissionPost';
import AnswerKeyPost from './Components/admin/AdminWebPage/AnswerKey/AnswerKeyPost';
import UpcommingPost from './Components/admin/AdminWebPage/Upcomming/UpcommingPost';



// Initialize Google Analytics
const trackingId = "G-RKS7E9435N";
ReactGA.initialize(trackingId);

const App = () => {
  return (
      <div className="">
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admitCard" element={<AdmitCard />} />
          <Route path="/result" element={<Result />} />
          <Route path="/statejob" element={<StateJob />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/answer_Key" element={<AnswerKey />} />
          <Route path="/result/:postname/:id" element={<ResultDetails />} />
          <Route path="/admission/:postname/:id" element={<AdmissionDetails />} />   
          <Route path="/statejob/:postname/:id" element={<StatejobDetails/>} />
          <Route path="/admitCard/:postname/:id" element={<AdmitCardDetails/>} />
          <Route path="/answer_Key/:postname/:id" element={<AnswerKeyDetails />} />
          <Route path="/upcomming" element={<Upcomming />} />
          <Route path="/upcomming/:postname/:id" element={<UpcommingDetails />} />
          <Route path="/:postname/:id" element={<JobDetails />} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/termsandconditions" element={<TermsConditions/>} />
          <Route path="/careers" element={<AboutUs/>} />
          <Route path="/helpandsupport" element={<HelpSupport/>} />


          //// Protected Route
          <Route path="/admin" element={ <ProtectedRoute> <Admin /> </ProtectedRoute> } />
          <Route path="/admin/:postname/:id" element={ <ProtectedRoute> < AdminJobDetails/> </ProtectedRoute> } />

          <Route path="/admin/result"     element={ <ProtectedRoute> <AdminResult /> </ProtectedRoute>}/>
          <Route path="/admin/result/:postname/:id"     element={ <ProtectedRoute> <AdminResultDetails /> </ProtectedRoute>}/>

          <Route path="/admin/admitCard"  element={ <ProtectedRoute> <AdminAdmitCard /> </ProtectedRoute>}/>
          <Route path="/admin/admitCard/:postname/:id"  element={ <ProtectedRoute> <AdminAdmitCardDetails /> </ProtectedRoute>}/>

          <Route path="/admin/upcomming"  element={ <ProtectedRoute> <AdminUpcomming /> </ProtectedRoute>}/>
          <Route path="/admin/upcomming/:postname/:id"  element={ <ProtectedRoute> <AdminUpcommingDetails /> </ProtectedRoute>}/>

          <Route path="/admin/admission"  element={ <ProtectedRoute> <AdminAdmission /> </ProtectedRoute>}/>
          <Route path="/admin/admission/:postname/:id"  element={ <ProtectedRoute> <AdminAdmissionDetails /> </ProtectedRoute>}/>
          
          <Route path="/admin/answer_Key" element={ <ProtectedRoute> <AdminAnswerKey /> </ProtectedRoute>}/>
          <Route path="/admin/answer_key/:postname/:id" element={ <ProtectedRoute> <AdminAnswerKeyDetails /> </ProtectedRoute>}/>

          <Route path="/admin/statejob"   element={ <ProtectedRoute> <AdminStateJob /> </ProtectedRoute>}/>
          <Route path="/admin/statejob/:postname/:id"   element={ <ProtectedRoute> <AdminStateJobDetails /> </ProtectedRoute>}/>

          <Route path="/admin/jobPost" element={ <ProtectedRoute> <JobPost/> </ProtectedRoute> }/>
          <Route path="/admin/resulPost" element={ <ProtectedRoute> <ResultPost/> </ProtectedRoute> } />
          <Route path="/admin/statejobPost" element={ <ProtectedRoute> <StatePost/> </ProtectedRoute> } />
          <Route path="/admin/admitCardPost" element={ <ProtectedRoute> <AdmitCardPost/> </ProtectedRoute> } />
          <Route path="/admin/admissionPost" element={ <ProtectedRoute> <AdmissionPost/> </ProtectedRoute> } />
          <Route path="/admin/answer_KeyPost" element={ <ProtectedRoute> <AnswerKeyPost/> </ProtectedRoute> } />
          <Route path="/admin/upcommingPost" element={ <ProtectedRoute> <UpcommingPost/> </ProtectedRoute> } />
          {/* <Route path="/admin/notificationPost" element={ <ProtectedRoute> <NotificationPost/> </ProtectedRoute> } /> */}

        </Routes>

       
    </div> 
  );
};

export default App;