import React, { useState } from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const JobDetailsBottomdiv = (
    {
        postDescription,
        applyLink,
        totalPost = "Not Available",
        date1,
        date2,
        date3,
        date4,
        date5,
        date6,
        date7,
        date8,
        date9,
        date10,
        age1,
        age2,
        age3,
        age4,
        age5,
        age6,
        age7,
        age8,
        age9,
        age10,
        Fee1,
        Fee2,
        Fee3,
        Fee4,
        Fee5,
        Fee6,
        Fee7,
        Fee8,
        Fee9,
        Fee10,
        postImage,
    }
) => {
    const [activeTab, setActiveTab] = useState('description')
    const [showImage, setShowImage] = useState(false)

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    const imageToggle = () => { 
        setShowImage(!showImage)
    }

    return (
        <div className="px-5 py-7 rounded-b-lg bg-[#F1F5F8] mb-24 flex flex-wrap">
            <div className="flex justify-center flex-wrap h-16 md:h-8 gap-2">
                <button
                    onClick={() => handleTabClick('description')}
                    className={`block text-sm rounded font-jost px-3 ${activeTab === 'description' ? 'bg-[#119766]' : 'bg-[#DFE0E1]'}`}
                >
                    Job Description
                </button>
                <button
                    onClick={() => handleTabClick('requirements')}
                    className={`block text-sm rounded font-jost px-3 ${activeTab === 'requirements' ? 'bg-[#119766]' : 'bg-[#DFE0E1]'}`}
                >
                    Important Details
                </button>
                <button
                    onClick={() => handleTabClick('information')}
                    className={`block text-sm rounded font-Jost px-3 ${activeTab === 'information'  ? 'bg-[#119766]' : 'bg-[#DFE0E1]'}`}
                >
                    Age Limit & Post Details
                </button>
            </div>
            <div className="h-full w-full pt-7">
                {activeTab === 'description' && (
                    <div className=" space-y-3 flex flex-col pb-5">
                        <p className='text-[#0E0202]'>{postDescription}</p>      
                    </div>
                )}
                {activeTab === 'requirements' && (
                    <>
                    <div className=" space-y-3 flex flex-col pb-5">
                        <div className="">
                        <h6 className='text-[#0E0202] font-Jost font-bold '>Important Dates:</h6>
                        {date1.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date1} </p> : null}
                        {date2.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date2} </p> : null}
                        {date3.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date3} </p> : null}
                        {date4.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date4} </p> : null}
                        {date5.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date5} </p> : null}
                        {date6.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date6} </p> : null}
                        {date7.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date7} </p> : null}
                        {date8.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date8} </p> : null}
                        {date9.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date9} </p> : null}
                        {date10.length > 0 && date1 ? <p className='text-[#0E0202]'> ❗{date10} </p> : null}
                        </div>
                    </div>
                    <div className=" space-y-3 flex flex-col pb-5">
                        <div className="">
                        <h6 className='text-[#0E0202] font-Jost font-bold '>Application Fee:</h6>
                        {Fee1.length  > 0 && Fee1 ? <p className='text-[#0E0202]'> ❗ { Fee1} </p> : null}
                        {Fee2.length  > 0 && Fee2 ? <p className='text-[#0E0202]'>  ❗{Fee2} </p> : null}
                        {Fee3.length  > 0 && Fee3 ? <p className='text-[#0E0202]'>  ❗{Fee3} </p> : null}
                        {Fee4.length  > 0 && Fee4 ? <p className='text-[#0E0202]'>  ❗{Fee4} </p> : null}
                        {Fee5.length  > 0 && Fee5 ? <p className='text-[#0E0202]'>  ❗{Fee5} </p> : null}
                        {Fee6.length  > 0 && Fee6 ? <p className='text-[#0E0202]'>  ❗{Fee6} </p> : null}
                        {Fee7.length  > 0 && Fee7 ? <p className='text-[#0E0202]'>  ❗{Fee7} </p> : null}
                        {Fee8.length  > 0 && Fee8 ? <p className='text-[#0E0202]'>  ❗{Fee8} </p> : null}
                        {Fee9.length  > 0 && Fee9 ? <p className='text-[#0E0202]'>  ❗{Fee9} </p> : null}
                        {Fee10.length > 0 && Fee10 ? <p className='text-[#0E0202]'> ❗{Fee10} </p> : null}
                        </div>
                    </div>
                    </>
                )}
                {activeTab === 'information' && (
                    <div className=" space-y-3 flex flex-col pb-5">
                        <div className="">
                            <h6 className='text-[#0E0202] font-Jost font-bold '>Application Fee:</h6>
                            {age1.length  > 0 && age1  ? <p className='text-[#0E0202]'> ❗{age1} </p> : null}
                            {age2.length  > 0 && age2  ? <p className='text-[#0E0202]'> ❗{age2} </p> : null}
                            {age3.length  > 0 && age3  ? <p className='text-[#0E0202]'> ❗{age3} </p> : null}
                            {age4.length  > 0 && age4  ? <p className='text-[#0E0202]'> ❗{age4} </p> : null}
                            {age5.length  > 0 && age5  ? <p className='text-[#0E0202]'> ❗{age5} </p> : null}
                            {age6.length  > 0 && age6  ? <p className='text-[#0E0202]'> ❗{age6} </p> : null}
                            {age7.length  > 0 && age7  ? <p className='text-[#0E0202]'> ❗{age7} </p> : null}
                            {age8.length  > 0 && age8  ? <p className='text-[#0E0202]'> ❗{age8} </p> : null}
                            {age9.length  > 0 && age9  ? <p className='text-[#0E0202]'> ❗{age9} </p> : null}
                            {age10.length > 0 && age10 ? <p className='text-[#0E0202]'> ❗{age10} </p> : null}
                        </div>
                        <div className="">
                            <h6 className='text-[#0E0202] font-Jost font-bold mb-2'>Total Post: {totalPost}</h6>
                            {postImage.length > 0 && postImage ? <NavLink to="/viewPost" className={`text-blue-600 text-sm  underline w-full`}> Show Vacancy Details</NavLink> : null}
                        </div>
                    </div>
                )}
            </div>
            <div className="inline-block">
                <a href={applyLink} target="_blank" className={`rounded-md py-2 px-4 text-sm bg-[#119766]`}> Apply now</a>
            </div>
        </div>
    )
}

export default JobDetailsBottomdiv