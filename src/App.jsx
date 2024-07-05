import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/WebPage/Home'
import AdmitCard from './Components/WebPage/AdmitCard'
import Result from './Components/WebPage/Result'
import Syllabus from './Components/WebPage/Syllabus'
import JobDetails from './Components/WebPage/JobDetails'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/adminCard' element={<AdmitCard/>}></Route>
      <Route path='/result' element={<Result/>}></Route>
      <Route path='/syllabus' element={<Syllabus/>}></Route>
      
      <Route path='/id' element={<JobDetails/>}></Route>
 
    </Routes>

    </>
  )
}

export default App