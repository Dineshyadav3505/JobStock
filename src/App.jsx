import React from 'react';
import ReactGA from 'react-ga';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Importing components
import Home from './Components/WebPage/Job/Home';
import AdmitCard from './Components/WebPage/AdmitCard/AdmitCard';
import Result from './Components/WebPage/Result/Result';
import JobDetails from './Components/WebPage/Job/JobDetails';
import Admission from './Components/WebPage/Admission/Admission';
import AnswerKey from './Components/WebPage/AnswerKey/AnswerKey';
import Important from './Components/WebPage/Important/Important';
import ResultDetails from './Components/WebPage/Result/ResultDetails';
import AdmitCardDetails from './Components/WebPage/AdmitCard/AdmitCardDetails';
import AnswerKeyDetails from './Components/WebPage/AnswerKey/AnswerKeyDetails';
import AdmissionDetails from './Components/WebPage/Admission/AdmissionDetails';
import Upcomming from './Components/WebPage/Upcomming/Upcomming';
import StateJob from './Components/WebPage/StateJob/Statejob';
import StatejobDetails from './Components/WebPage/StateJob/StatejobDetails';
import LogIn from './Components/WebPage/LogIn/LogIn';
import Admin from './Components/Admin/Admin';

// Initialize Google Analytics
const trackingId = "G-RKS7E9435N";
ReactGA.initialize(trackingId);

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admitCard" element={<AdmitCard />} />
          <Route path="/result" element={<Result />} />
          <Route path="/statejob" element={<StateJob />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/answer_Key" element={<AnswerKey />} />
          <Route path="/important" element={<Important />} />
          <Route path="/result/:postname/:id" element={<ResultDetails />} />
          <Route path="/admission/:postname/:id" element={<AdmissionDetails />} />   
          <Route path="/statejob/:postname/:id" element={<StatejobDetails/>} />
          <Route path="/admitCard/:postname/:id" element={<AdmitCardDetails/>} />
          <Route path="/answer_Key/:postname/:id" element={<AnswerKeyDetails />} />
          <Route path="/upcomming" element={<Upcomming />} />
          <Route path="/:postname/:id" element={<JobDetails />} />
          <Route path="/login" element={<LogIn/>} />

          <Route path="/admin" element={<Admin/>} />

        </Routes>

  );
};

export default App;