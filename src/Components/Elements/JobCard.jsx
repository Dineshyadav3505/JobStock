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
    }
) => {


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
                    <h1 className="text-xl font-Jost font-semibold ">{title}</h1>
                    <div className=" flex flex-wrap gap-2">
                        <Button
                            className="text-xs py-1 px-2 rounded-sm bg-slate-100 text-zinc-900 font-Jost font-semibold"
                            onClick=""
                            children="Begin:"
                            span={date}
                        />
                        <Button
                            className="text-xs py-1 px-2 rounded-sm bg-slate-100 text-red-400 font-Jost font-semibold"
                            onClick=""
                            children="Last Date:"
                            span={lastDate}
                        />
                    </div>


                </div>

                {/* Save Button */}
                <div onClick={save}  className={`bg-[#FEEDDF] min-h-10 max-h-10 min-w-10 max-w-10 rounded-full p-2 ${saveBtn}`}>
                    <img src="/Images/Save.svg" alt="" />
               </div>
                <div onClick={remove}  className={`bg-[#FEEDDF] min-h-10 max-h-10 min-w-10 max-w-10 rounded-full p-2 ${removeBtn}`}>
                    <img src="/Images/Save.svg" alt="" />
               </div>
                

            </div>
            {/* Apply Button And Time */}
            <div className="flex  justify-end items-center ">
                <h1 className=" text-sm font-Jost">07 days ago</h1>
                <Button 
                    className="ml-3"
                    onClick={applyBtn}
                />
            </div>
        </div>
  )
}

export default JobCard