import React from 'react'
import Button from './Button'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import axios from '../../../utils/Axios';


const JobCard = (
    {
        id,
        img,
        title,
        date,
        lastDate,
        saveBtn="block",
        removeBtn="hidden",
        yyyymmddDate,
        yyyymmddDateLine="hidden",
        children,
        button,
        upcommingButton="hidden",
        createdDate
    }


) => {

    const someDate = new Date(yyyymmddDate);
    const diffInDays = getDaysBetweenDates(someDate);
    const [copy, setCopy] = useState(false);
    const location = useLocation();
    const postlink = title.replace(/ /g, "-").replace(/\//g, "-");
    const accessToken = Cookies.get('cb_chec');

    const handleDelete = async () => {
        const userConfirmed = window.confirm("Do you want to delete the Post?");
        
        if (userConfirmed) {
            // Prompt user to select an option
            const optionKeys = ["job", "statejob", "result", "admitCard", "admission", "upcomming", "answerKey"];
            const selectedOption = window.prompt(`Please select an option:\n${optionKeys.join("\n")}`);
            
            // Check if the selected option is valid
            if (optionKeys.includes(selectedOption)) {
                const productId = { id }; // Ensure 'id' is defined in the scope
                const idString = productId.id;     
                const option = selectedOption; // Store the selected option
                
                try {
                    const response = await axios.delete(`/${option}/${idString}`, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`, // Ensure accessToken is defined in scope
                        }
                    });    
                    console.log("Post deleted successfully:", response.data); // Log success message
                    window.location.reload(); 
                } catch (error) {
                    console.error("Error deleting post:", error); // Log any errors
                }
            } else {
                console.log("Invalid option selected. Post deletion canceled.");
            }
        } else {
            console.log("Post deletion canceled.");
        }
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
    <div className=" p-5 mt-5 rounded-lg border-[1px] border-zinc-700 w-full md:w-[47vw] lg:w-[31.4vw]">
            <div className="flex gap-4 relative">

                {/* Icon */}
                <div className=" inline-flex h-14 w-14 p-1 justify-center items-center ">
                    <img className="h-full  object-contain" src={img} alt="" />
                </div>

                {/* Job Title */}
                <div className=" space-y-2 mb-2 w-full">
                    <NavLink to={`${title}/${id}`} className="text-xl block min-h-16 font-Jost font-semibold text-zinc-400 ">{short}</NavLink>
                    <div className=" flex flex-wrap gap-2">
                        <Button
                            className="text-xs py-1 px-2 rounded-sm bg-zinc-700 text-zinc-900 font-Jost font-semibold"
                            onClick=""
                            children="Begin:"
                            span={date}
                        />
                        <Button
                            className="text-xs py-1 px-2 rounded-sm bg-zinc-700 text-[#D03030] font-Jost font-semibold"
                            onClick="" 
                            children="Last Date:"
                            span={lastDate}
                        />
                    </div>


                </div>

                {/* Share Button */}
                <div onClick={handleDelete}  className={`bg-zinc-600 flex justify-center items-center text-zinc-900 hover:text-[#119766] min-h-10 max-h-10 min-w-10 max-w-10 rounded-full p-2 ${saveBtn}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>

            </div>
            {/* Apply Button And Time */}
            <div className="flex  justify-end items-center  ">
                <h1 className ={`text-sm font-Jost text-[#D03030] ${yyyymmddDateLine}`}>{days}</h1>

                <Button 
                    className={`ml-3 text-[#F2F2F2] ${button}`}
                    postlink={postlink || title}
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

