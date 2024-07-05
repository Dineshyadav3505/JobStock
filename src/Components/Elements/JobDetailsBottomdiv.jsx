import React from 'react'
import Button from './Button'

const JobDetailsBottomdiv = () => {

    const button =[
        {name:"Job Description"},
        {name:"Job Requirements"},
        {name:"More Information"},
    ]

  return (
    <div className="px-5 py-7 h-screen rounded-b-lg bg-[#F1F5F8] mb-24 flex flex-wrap">
        {
            button.map((item, index)=>(
                <h2 key={index}></h2>
            ))
        }
    </div>
  )
}

export default JobDetailsBottomdiv