import React, { useState } from 'react'
import Button from './Button'

const JobDetailsBottomdiv = () => {
    const [activeTab, setActiveTab] = useState('description')

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    const Description = "Themezhub Web provides equal employment opportunities to all qualified individuals without regard to race, color, religion, sex, gender identity, sexual orientation, pregnancy, age, national origin, physical or mental disability, military or veteran status, genetic information, or any other protected classification. Equal employment opportunity includes, but is not limited to, hiring, training, promotion, demotion, transfer, leaves of absence, and termination. Thynk Web takes allegations of discrimination, harassment, and retaliation seriously, and will promptly investigate when such behavior is reported.Our company is seeking to hire a skilled Web Developer to help with the development of our current projects. Your duties will primarily revolve around building software by writing code, as well as modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces. You will also be involved in directing system testing and validation procedures, and also working with customers or departments on technical issues including software system design and maintenance. We are looking for a Senior Web Developer to build and maintain functional web pages and applications. Senior Web Developer will be leading junior developers, refining website specifications, and resolving technical issues. He/She should have extensive experience building web pages from scratch and in-depth knowledge of at least one of the following programming languages: Javascript, Ruby, or PHP. He/She will ensure our web pages are up and running and cover both internal and customer needs."

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
                    Job Requirements
                </button>
                <button
                    onClick={() => handleTabClick('information')}
                    className={`block text-sm rounded font-Jost px-3 ${activeTab === 'information'  ? 'bg-[#119766]' : 'bg-[#DFE0E1]'}`}
                >
                    More Information
                </button>
            </div>
            <div className="h-full w-full pt-7">
                {activeTab === 'description' && (
                    <div className=" space-y-3 flex flex-col pb-5">
                        <p className='text-[#0E0202]'>{Description}</p>      
                    </div>
                )}
                {activeTab === 'requirements' && (
                    <div className=" space-y-3 flex flex-col pb-5">
                        <h6 className='text-[#0E0202] font-Jost font-bold '>Requirements:</h6>
                        <p className='text-[#0E0202]'> O- <span>{Description}</span></p>
                    </div>
                )}
                {activeTab === 'information' && (
                    <div className=" space-y-3 flex flex-col pb-5">
                        <h6 className='text-[#0E0202] font-Jost font-bold '>More Details:</h6>
                    </div>
                )}
            </div>
            <div className="inline-block">
                <Button
                    children="Apply Now"
                    className='inline-block'
                    onClick='/apply'
                />
            </div>
        </div>
    )
}

export default JobDetailsBottomdiv