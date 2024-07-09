import React from 'react'
import Button from './Button'

const JobDetailsUpperdiv = ({
  img, //{data.iconImage}
  title, //{data.postName}
  date, //{data.beginDate}
  lastDate, //{data.lastDate}
  yyyymmddDate, //{data.lastDate}
}) => {

  const someDate = new Date(yyyymmddDate);
  const diffInDays = getDaysBetweenDates(someDate);

  function getDaysBetweenDates(endDate) {
      const today = new Date();
      const diffInDays = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));
      return diffInDays;
  }

  let days;
  if (diffInDays < -1) {
      days = "Application Closed";
  } else if (diffInDays === -1) {
      days = "Today is the last day to apply";
  } else if (diffInDays === 0) {
      days = "1 day left";
  } else if (diffInDays > 0) {
      days = `${diffInDays} days left`;
  } else {
      days = `${Math.abs(diffInDays)} days ago`;
  }

  const save = () => {
      console.log('Save Job');
  }
  const remove = () => {
      console.log('Remove Job');
  }

  return (
    <div className="w-full bg-[#D3F4E5] px-5 pt-8 pb-4 md:flex gap-5">
        <div className=" h-24 w-24 md:h-28 md:w-28 rounded-full p-2 overflow-hidden bg-white">
            <img className='h-full object-contain' src={img} alt="" />
        </div>
        <div className="py-5 space-y-3">
            <h1 className="text-xl md:text-2xl font-Jost font-bold text-[#0E0202]">{title}</h1>
            <h5 className='font-Jost text-sm md:text-base text-[#0E0202]'>Important Dates</h5>

            <div className=" flex gap-3 flex-wrap">
                <p className="text-xs md:text-sm font-Jost rounded font-semibold text-[#0E0202] capitalize px-2 py-1 bg-[#a9f1d1]" > <span> ✩ Begin:</span> {date} </p>
                <p className="text-xs md:text-sm font-Jost rounded font-semibold text-[#D03030] capitalize px-2 py-1 bg-[#a9f1d1]" > <span> ✩ Last Date:</span> {lastDate}</p>
                <p className="text-xs md:text-sm font-Jost rounded font-semibold text-[#0E0202] capitalize px-2 py-1 bg-[#a9f1d1]" > <span> ✩ Time left:</span> {days} </p>
            </div>
        </div>
    </div>
  )
}

export default JobDetailsUpperdiv