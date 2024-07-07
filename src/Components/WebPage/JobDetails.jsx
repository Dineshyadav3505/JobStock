import React from 'react'
import NavBar from '../Elements/NavBar'
import Button from '../Elements/Button'
import JobDetailsUpperdiv from '../Elements/JobDetailsUpperdiv'
import JobDetailsBottomdiv from '../Elements/JobDetailsBottomdiv'


const JobDetails = () => {

  return (
    <>
    <NavBar/>
    <div className="relative ">
      <img className='w-full md:hidden' src="/Images/banner.jpeg" alt="" />
      <img className='w-full hidden md:block lg:hidden' src="/Images/bannermd.svg" alt="" />
      <img className='w-full hidden lg:block' src="/Images/bannerLG.svg" alt="" />
        <div className="px-5 absolute top-56 w-screen md:px-16 ">
            <div className="w-full bg-white rounded-lg overflow-hidden ">
                
                <JobDetailsUpperdiv

                />

                <JobDetailsBottomdiv
                />


                
            </div>

        </div>
    </div>
    </>
  )
}

export default JobDetails