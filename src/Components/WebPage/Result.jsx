import React from 'react'
import NavBar from '../Elements/NavBar'
import JobCard from '../Elements/JobCard'

const Result = () => {

  const data =[
    {},
    {},

  ]

  return (
    <>
    <NavBar/>
    <div className="p-5 flex flex-wrap  justify-between pb-24">
        {
            data.map((item, index) => (
                <JobCard 
                    key={index}
                    id={item.id}
                    img="/Images/Job.svg"
                    title="Union Public Service Commission (UPSC)"
                    date="15th June 2021"
                    lastDate="15th June 2021"
                    saveBtn="block"
                    removeBtn="hidden"
                    applyBtn="/id"
                />
            ))  
        }

    </div>
    </>
  )
}

export default Result