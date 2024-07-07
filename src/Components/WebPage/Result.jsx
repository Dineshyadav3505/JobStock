import React from 'react'
import NavBar from '../Elements/NavBar'
import { useForm } from 'react-hook-form';
import JobCard from '../Elements/JobCard'

const Result = () => {

  const { register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    
    const data =[
        {},
        {},
        {},
        {},
        {},
        {},
    ]

  return (
    <>
    <NavBar/>
    <div className="p-5 flex flex-wrap  justify-between pb-24">

        <form onSubmit={handleSubmit(onSubmit)} className="border rounded-md p-2 w-full">
                <input
                {...register('searchTerm')}
                className="w-[70%] md:w-[80%] lg:w-[90%] text-base text-black focus:bg-transparent outline-none px-2"
                type="text"
                placeholder='Job Search '
                />
                <button
                className="h-12 lg:h-8 bg-[#119766] rounded-md text-[#F2F2F2] w-[30%] md:w-[20%] lg:w-[10%]"
                type="submit"
                >
                Search
                </button>
        </form>

        {
            data.map((item, index) => (
                <JobCard 
                    key={index}
                    id={item.id}
                    img="https://imgs.search.brave.com/MLrsy63K6fj92Gwd-_7bbhEcIqZ1xA4QfLgHeApfPRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9JbnN0YWdy/YW0tbG9nby1QTkct/bGFyZ2Utc2l6ZS5w/bmc"
                    title="Union Public Service Commission (UPSC)"
                    date="15th June 2021"
                    lastDate="15th June 2021"
                    saveBtn="block"
                    removeBtn="hidden"
                    applyBtn="/id"
                />
            ))  
        }

    </div>
    </>
  )
}

export default Result