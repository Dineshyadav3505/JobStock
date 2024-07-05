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
        <img className='w-full' src="https://imgs.search.brave.com/qsvK2keyNhn7uFSWjqCZdQDvtXBty7gw7XtOrhcmpCc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ibHVlLXB1cnBs/ZS1hYnN0cmFjdC1i/YWNrZ3JvdW5kLXdp/dGgtY29weS1zcGFj/ZS10ZXh0LWltYWdl/XzEwODc1ODItMTUx/LmpwZz9zaXplPTYy/NiZleHQ9anBn" alt="" />
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