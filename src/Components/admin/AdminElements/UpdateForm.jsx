import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from './Input';

const UpdateForm = ({
    img,
    title,
    date,
    lastDate,
    yyyymmddDate,
    postImage,
    postDescription,
    applyLink,
    totalPost,
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
    children,
    vacancyDetails="hidden"
}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    //up
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
    <>
    {/* // upper */}
    <form action="">
    <div className="w-full bg-zinc-900 px-5 pt-8 pb-4 md:flex gap-5">
        <div className=" h-24 w-24 md:h-28 md:w-28 rounded-full p-2 overflow-hidden bg-white flex justify-center relative items-center">
            <img className='h-full object-contain' src={img} alt="" />
            <Input
                divClass=" absolute bottom-0 left-0"
                label="Icon Image"
                labelclass="text-xs capitalize text-white"
                type="file"
                className='border h-16 w-56 rounded-md block bg-transparent border-white text-xs text-zinc-400 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder="Icon Image"
                {...register('iconImage')}
            />
            
        </div>
        <div className=" space-y-3">
            <Input
                divclass=""
                label="Post Name"
                labelclass="text-xs capitalize text-white"
                type="text"
                className='border py-1 w-full rounded-md block bg-transparent border-white text-sm text-zinc-400 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder={title}
                {...register('postName')}
            />
            
            <h5 className='font-Jost text-sm md:text-base text-zinc-400'>Important Dates</h5>

            <div className=" flex gap-3 flex-wrap">
                <Input
                    divclass="w-56"
                    label="Begin Date"
                    labelclass="text-xs capitalize text-white"
                    type="text"
                    className='border py-1 rounded-md block bg-transparent border-white text-xs text-zinc-400 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder={date || "NA 02 Aug 2024"}
                    {...register('beginDate')}
                />
                <Input
                    divclass="w-56"
                    label="Last Date"
                    labelclass="text-xs capitalize text-white"
                    type="text"
                    className='border py-1 rounded-md block bg-transparent border-white text-xs text-zinc-400 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder={lastDate || "NA 02 Aug 2024"}
                    {...register('lastDate')}
                />
                <Input
                    divclass="w-full bg-red-900"
                    label="YYYY-MM-DD Date"
                    labelclass="text-xs capitalize text-white"
                    type="text"
                    className='border py-1 rounded-md block bg-transparent border-white text-xs text-zinc-400 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder={yyyymmddDate || "NA 2024-08-02"}
                    {...register('yyyymmddDate')}
                />
            </div>
        </div>
    </div>

    {/* // middle */}
    <div className="px-5 rounded-b-lg bg-zinc-900 mb-24 flex flex-wrap">
            
            <div className="h-full w-full pt-7">
                
                    <div className=" space-y-3 flex flex-col pb-5">
                        <Input
                            divclass=""
                            label="postDescription"
                            labelclass="text-xs capitalize text-white"
                            type="text"
                            className='border py-1 w-full rounded-md block bg-transparent border-white text-xs text-zinc-400 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder={postDescription || "NA"}
                            {...register('postDescription')}
                        />      
                    </div>
    
                
                    <div className=" space-y-3 flex flex-col pb-5">
                        <h6 className='text-zinc-400 font-Jost font-bold '>Important Dates:</h6>
                        <div className="flex flex-wrap justify-evenly gap-3">
                        <Input divClass="w-full lg:w-56"
                            label="Date"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date1 || NA} {...register(`date1`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Date"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date2 || NA} {...register(`date2`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Date"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date3 || "NA"} {...register(`date3`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Date"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date4 || "NA"} {...register(`date4`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Date"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date5 || "NA"} {...register(`date5`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Date"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date6 || "NA"} {...register(`date6`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Date"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date7 || "NA"} {...register(`date7`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Date"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date8 || "NA"} {...register(`date8`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Date"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date9 || "NA"} {...register(`date9`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Date1"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={date10 || "NA"} {...register(`date10`)
                        }/>
                        </div>
                    </div>
                    <div className=" space-y-3 flex flex-col pb-5">
                        <h6 className='text-zinc-400 font-Jost font-bold '>Application Fee:</h6>
                        <div className="flex flex-wrap justify-evenly gap-3">
                        
                        <Input divClass="w-full lg:w-56"
                            label="Fee"
                            labelclass="text-xs capitalize text-white"datepe="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee1 || NA} {...register(`Fee1`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Fee"
                            labelclass="text-xs capitalize text-white"datepe="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee2 || NA} {...register(`Fee2`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Fee"
                            labelclass="text-xs capitalize text-white"datepe="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee3 || "NA"} {...register(`Fee3`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Fee"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee4 || "NA"} {...register(`Fee4`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Fee"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee5 || "NA"} {...register(`Fee5`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Fee"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee6 || "NA"} {...register(`Fee6`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Fee"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee7 || "NA"} {...register(`Fee7`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Fee"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee8 || "NA"} {...register(`Fee8`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Fee"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee9 || "NA"} {...register(`Fee9`)
                        }/>
                        <Input divClass="w-full lg:w-56"
                            label="Fee1"
                            labelclass="text-xs capitalize text-white" type="text" className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Fee10 || "NA"} {...register(`Fee10`)
                        }/>
                        
                        </div>
                    </div>
                
                    <div className=" space-y-3 flex flex-col pb-5">
                        <h6 className='text-zinc-400 font-Jost font-bold '>Eligibility and Exam Details:</h6>
                        <div className="flex flex-wrap justify-evenly gap-3">
                        
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 1"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age1 || "NA"} 
                            {...register(`Age1`)}
                        />
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 2"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age2 || "NA"} 
                            {...register(`Age2`)}
                        />
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 3"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age3 || "NA"} 
                            {...register(`Age3`)}
                        />
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 4"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age4 || "NA"} 
                            {...register(`Age4`)}
                        />
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 5"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age5 || "NA"} 
                            {...register(`Age5`)}
                        />
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 6"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age6 || "NA"} 
                            {...register(`Age6`)}
                        />
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 7"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age7 || "NA"} 
                            {...register(`Age7`)}
                        />
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 8"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age8 || "NA"} 
                            {...register(`Age8`)}
                        />
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 9"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age9 || "NA"} 
                            {...register(`Age9`)}
                        />
                        <Input 
                            divClass="w-full lg:w-56"
                            label="Age 10"
                            labelclass="text-xs capitalize text-white"
                            type="text" 
                            className='border py-1 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                            placeholder={Age10 || "NA"} 
                            {...register(`Age10`)}
                        />
                        
                        </div>
                   
                
            
        </div>
    </form>
    </>
  )
}

export default UpdateForm