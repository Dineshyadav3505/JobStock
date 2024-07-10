import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/WebPage/Job/Home'
import AdmitCard from './Components/WebPage/AdmitCard/AdmitCard'
import Result from './Components/WebPage/Result/Result'
import Syllabus from './Components/WebPage/Syllabus/Syllabus'
import JobDetails from './Components/WebPage/Job/JobDetails'
import Admission from './Components/WebPage/Admission/Admission'
import AnswerKey from './Components/WebPage/AnswerKey/AnswerKey'
import Important from './Components/WebPage/Important/Important'
import CertificateVerification from './Components/WebPage/CertificateVerification/CertificateVerification'
import SavedPost from './Components/WebPage/SavedPost/SavedPost'
import ImageView from './Components/WebPage/Job/ImageView'
import ResultDetails from './Components/WebPage/Result/ResultDetails'
import AdmitCardDetails from './Components/WebPage/AdmitCard/AdmitCardDetails'
import Loading from './Components/Elements/Loader'



const App = () => {
  return (        
    <>
    
    <Routes>
      <Route path='/'                         element={<Home/>}></Route>
      <Route path='/adminCard'                element={<AdmitCard/>}></Route>
      <Route path='/result'                   element={<Result/>}></Route>
      <Route path='/syllabus'                 element={<Syllabus/>}></Route>
      <Route path='/admission'                element={<Admission/>}></Route>
      <Route path='/answer_Key'               element={<AnswerKey/>}></Route>
      <Route path='/important'                element={<Important/>}></Route>
      <Route path='/certificate_Verification' element={<CertificateVerification/>}></Route>
      <Route path='/saved_Post'               element={<SavedPost/>}></Route>
      
      <Route path='/viewPost' element={<ImageView/>}></Route>
      <Route path='/result/:id' element={<ResultDetails/>}></Route>
      <Route path='/adminCard/:id' element={<AdmitCardDetails/>}></Route>
      <Route path='/:id' element={<JobDetails/>}></Route>
      <Route path='/c' element={<Loading/>}></Route>

 
    </Routes>

    </>
  )
}

export default App