import React, { useState } from 'react'
import Button from './Button'

const JobDetailsBottomdiv = () => {
    const [activeTab, setActiveTab] = useState('description')

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div className="px-5 py-7 rounded-b-lg bg-[#F1F5F8] mb-24 flex flex-wrap">
            <div className="flex justify-center flex-wrap h-16 md:h-8 gap-2">
                <button
                    onClick={() => handleTabClick('description')}
                    className={`block text-sm rounded font-jost px-3 ${activeTab === 'description' ? 'bg-[#119766]' : 'bg-slate-200'}`}
                >
                    Job Description
                </button>
                <button
                    onClick={() => handleTabClick('requirements')}
                    className={`block text-sm rounded font-jost px-3 ${activeTab === 'requirements' ? 'bg-[#119766]' : 'bg-slate-200'}`}
                >
                    Job Requirements
                </button>
                <button
                    onClick={() => handleTabClick('information')}
                    className={`block text-sm rounded font-Jost px-3 ${activeTab === 'information' ? 'bg-[#119766]' : 'bg-slate-200'}`}
                >
                    More Information
                </button>
            </div>
            <div className="h-full w-full pt-7">
                {activeTab === 'description' && (
                    <h1>Job Description</h1>
                )}
                {activeTab === 'requirements' && (
                    <h1>Job Requirements</h1>
                )}
                {activeTab === 'information' && (
                    <h1>More Information</h1>
                )}
            </div>
        </div>
    )
}

export default JobDetailsBottomdiv