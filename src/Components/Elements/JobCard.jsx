import React from 'react'
import Button from '../Elements/Button'

const JobCard = (
    {
        id,
        img,
        title,
        date,
        lastDate,
        saveBtn="block",
        removeBtn="hidden",
        applyBtn,
        yyyymmddDate,
    }


) => {

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
    <div className=" p-5 mt-5 rounded-lg border-[1px] border-zinc-300 md:w-[47vw] lg:w-[31.4vw]">
            <div className="flex gap-4 ">
                {/* Icon */}
                <div className=" inline-block h-14 w-14 p-1 ">
                    <img className="h-full object-contain" src={img} alt="" />
                </div>

                {/* Job Title */}
                <div className=" space-y-2 mb-2 w-full">
                    <h1 className="text-xl font-Jost font-semibold text-[#0E0202] ">{title}</h1>
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

                {/* Save Button */}
                <div onClick={save}  className={`bg-[#FEEDDF] flex justify-center items-center text-[#d26634] hover:text-[#119766] min-h-10 max-h-10 min-w-10 max-w-10 rounded-full p-2 ${saveBtn}`}>
                    <i className ="ri-bookmark-line "></i>
                </div>
                <div onClick={remove}  className={`bg-[#FEEDDF] text-black hover:text-[#119766] min-h-10 max-h-10 min-w-10 max-w-10 rounded-full p-2 ${removeBtn}`}>
                    <img src="/Images/Save.svg" alt="" />
               </div>
                

            </div>
            {/* Apply Button And Time */}
            <div className="flex  justify-end items-center ">
                <h1 className=" text-sm font-Jost text-[#D03030]">{days}</h1>
                <Button 
                    className="ml-3 text-[#F2F2F2]"
                    onClick={applyBtn}
                />
            </div>
        </div>
  )
}

export default JobCard