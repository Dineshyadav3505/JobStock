import React from 'react'
import Button from './Button'

const JobDetailsUpperdiv = () => {
  return (
    <div className="w-full bg-[#D3F4E5] px-5 pt-8 pb-4 md:flex gap-5">
        <div className=" h-24 w-24 md:h-28 md:w-28 rounded-full p-2 overflow-hidden">
            <img className='h-full scale-125 object-contain ' src="https://imgs.search.brave.com/QhzMkWTIOBkjWCwkwqOqyZ0J8Ryfb_Dw7tjjdsqWhqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFFRkg5V0k0/YWMvMS8wLzQwMHct/RjRRQm1Bc2JpUjQu/anBn" alt="" />
        </div>
        <div className="py-5 space-y-3">
            <h1 className="text-xl md:text-2xl font-Jost font-bold text-[#0E0202]">Union Public Service Commission (UPSC)</h1>
            <h5 className='font-Jost text-sm md:text-base text-[#0E0202]'>Important Dates</h5>

            <div className=" flex gap-3 flex-wrap">
                <p className="text-xs md:text-sm font-Jost rounded font-semibold text-[#0E0202] capitalize px-2 py-1 bg-[#a9f1d1]" > <span> ✩ Begin:</span> 10-05-2021 </p>
                <p className="text-xs md:text-sm font-Jost rounded font-semibold text-[#D03030] capitalize px-2 py-1 bg-[#a9f1d1]" > <span> ✩ Last Date:</span> 10-05-2021 </p>
                <p className="text-xs md:text-sm font-Jost rounded font-semibold text-[#0E0202] capitalize px-2 py-1 bg-[#a9f1d1]" > <span> ✩ Accept before:</span> 06:00 PM </p>
            </div>
        </div>
    </div>
  )
}

export default JobDetailsUpperdiv