import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/WebPage/Home'
import AdmitCard from './Components/WebPage/AdmitCard'
import Result from './Components/WebPage/Result'
import Syllabus from './Components/WebPage/Syllabus'
import JobDetails from './Components/WebPage/JobDetails'
import Admission from './Components/WebPage/Admission'
import AnswerKey from './Components/WebPage/AnswerKey'
import Important from './Components/WebPage/Important'
import CertificateVerification from './Components/WebPage/CertificateVerification'
import SavedPost from './Components/WebPage/SavedPost'



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
      
      <Route path='/:id' element={<JobDetails/>}></Route>
 
    </Routes>

    </>
  )
}

export default App