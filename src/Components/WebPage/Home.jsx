import React, { useEffect, useState } from 'react'
import NavBar from '../Elements/NavBar'
import JobCard from '../Elements/JobCard'
import { useForm } from 'react-hook-form';
import axios from '../../utils/Axios';

const Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('/job/job');
            setData(response.data.data);
            console.log(response.data.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchProducts();
      }, []);
    
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

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
                    img={item.iconImage}
                    title={item.postName}
                    date={item.beginDate}
                    lastDate={item.lastDate}
                    saveBtn="block"
                    removeBtn="hidden"
                    applyBtn={item._id}
                    yyyymmddDate={item.yyyymmddDate}
                />
            ))  
        }

    </div>
    </>
  )
}

export default Home