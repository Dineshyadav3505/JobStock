import React from 'react'
import Button from '../Elements/Button'

const JobDetailsUpperdiv = () => {
  return (
    <div className="w-full bg-[#EDFFFC] px-5 pt-8">
        <div className=" h-24 w-24 rounded-full p-2 overflow-hidden">
            <img className='h-full object-fill scale-125 ' src="https://imgs.search.brave.com/xYWGH66yLqmw3TolA6szv43JTjA-xm7AUOAqcinM2qE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAy/L0luc3RhZ3JhbS1h/cHAtbG9nby01MDB4/Mzc4LmpwZw" alt="" />
        </div>
        <div className="py-5 space-y-3">
            <h1 className="text-xl font-Jost font-bold text-black">Union Public Service Commission (UPSC)</h1>
            <h5 className='font-Jost text-base'>Important Dates</h5>

            <div className=" flex gap-3 flex-wrap">
                <Button
                    className="text-xs font-Jost font-semibold text-[#127464] capitalize px-2 py-1 bg-[#ace9df]"
                    children="Begin:"
                    span="10-05-2021"
                />
                <Button
                    className="text-xs font-Jost font-semibold text-[#127464] capitalize px-2 py-1 bg-[#ace9df]"
                    children="Last Date:"
                    span="10-05-2021"
                />
                <Button
                    className="text-xs font-Jost font-semibold text-[#127464] capitalize px-2 py-1 bg-[#ace9df]"
                    children="Accept before:"
                    span="06:00 PM"
                />
                     
            </div>
        </div>
    </div>
  )
}

export default JobDetailsUpperdiv