import React from 'react'
import Button from '../Elements/Button'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const JobCard = (
    {
        id,
        img,
        title,
        date,
        lastDate,
        saveBtn="block",
        removeBtn="hidden",
        postlink,
        yyyymmddDate,
        yyyymmddDateLine="hidden",
        children,
        button,
        upcommingButton="hidden"
    }


) => {

    const someDate = new Date(yyyymmddDate);
    const diffInDays = getDaysBetweenDates(someDate);
    const [copy, setCopy] = useState(false);
    const location = useLocation();

    const jobPostDetails = () => {
        let url;
        if (location.pathname === "/") {
          url = `https://naukrivacancy.com${location.pathname}${postlink || id}`;
        } else if (location.pathname === "/upcomming") {
          url = `https://naukrivacancy.com${location.pathname}`;
        } else {
          url = `https://naukrivacancy.com${location.pathname}/${postlink || id}`;
        }
      
        navigator.clipboard.writeText(url).then(
          () => {
            setCopy(true);
          },
          (error) => {
            console.error(error);
          }
        );
    }; 


    setTimeout(() => {
        setCopy(false);
    }, 2000);

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


    const short = title.length > 40 ? title.substring(0, 45) + "..." : title;


  return (
    <div className=" p-5 mt-5 rounded-lg border-[1px] border-zinc-300 w-full md:w-[47vw] lg:w-[31.4vw]">
            <div className="flex gap-4 ">
                {/* Icon */}
                <div className=" inline-flex h-14 w-14 p-1 justify-center items-center ">
                    <img className="h-full  object-contain" src={img} alt="" />
                </div>

                {/* Job Title */}
                <div className=" space-y-2 mb-2 w-full">
                    <NavLink to={postlink || id} state={{ id: id }} className="text-xl block min-h-16 font-Jost font-semibold text-[#0E0202] ">{short}</NavLink>
                    <div className=" flex flex-wrap gap-2">
                        <Button
                            className="text-xs py-1 px-2 rounded-sm bg-[#DFE0E1] text-zinc-900 font-Jost font-semibold"
                            onClick=""
                            children="Begin:"
                            span={date}
                        />
                        <Button
                            className="text-xs py-1 px-2 rounded-sm bg-[#DFE0E1] text-[#D03030] font-Jost font-semibold"
                            onClick="" 
                            children="Last Date:"
                            span={lastDate}
                        />
                    </div>


                </div>

                {/* Share Button */}
                <div onClick={jobPostDetails}  className={`bg-[#FEEDDF] flex justify-center items-center text-[#d26634] hover:text-[#119766] min-h-10 max-h-10 min-w-10 max-w-10 rounded-full p-2 ${saveBtn}`}>
                    {copy === true ? (<img src='/Images/copy.svg'/>) : (<img src="/Images/save.svg" alt="" />)}
                </div>

            </div>
            {/* Apply Button And Time */}
            <div className="flex  justify-end items-center ">
                <h1 className ={`text-sm font-Jost text-[#D03030] ${yyyymmddDateLine}`}>{days}</h1>

                <Button 
                    className={`ml-3 text-[#F2F2F2] ${button}`}
                    postlink={postlink}
                    id={id}
                    children={children}
                />
                <NavLink className={`rounded-md py-2 px-4 text-sm text-[#F2F2F2] bg-[#119766] ${upcommingButton} `}>
                    Upcomming
                </NavLink>

            </div>
        </div>
  )
}

export default JobCard

