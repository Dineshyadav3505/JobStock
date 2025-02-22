import React, { useEffect, useState, useHistory } from 'react'
import NavBar from '../../Elements/NavBar'
import JobCard from '../../Elements/JobCard'
import { useForm } from 'react-hook-form';
import axios from '../../../utils/Axios';
import ReactGA from 'react-ga';
import { NavLink } from 'react-router-dom';
import Footer from '../../Elements/Footer';

const Home = () => {
    const [Loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (formData) => {
      const { searchTerm: newSearchTerm } = formData;
      setSearchTerm(newSearchTerm);
    };

    useEffect(() => {
      ReactGA.pageview(window.location.pathname)
      const fetchProducts = async () => {
        try {
          const response = await axios.get('/job/job', {
            params: {
              searchTerm
            }
          });
          setFilteredData([...response.data.data].reverse());
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchProducts();
    }, [searchTerm]);

  return (
    <>
    <NavBar/>
    {Loading === true ? (
          <div className="h-screen w-full flex justify-center items-center">
            <div className="border-[5px] h-12 w-12 rounded-full border-t-[#119766] animate-spin"
            ></div>
          </div>
    ) : (
    <>
    <div className="p-5 flex flex-wrap justify-between pb-10">
        <form onSubmit={handleSubmit(onSubmit)} className="border sticky top-1 z-10 bg-black rounded-md p-2 w-full">
                <input
                {...register('searchTerm')}
                className="w-[70%] md:w-[80%] lg:w-[90%] text-base bg-black text-white focus:bg-transparent outline-none px-2"
                type="text"
                placeholder='Search for job...'
                />
                <button
                className="h-12 lg:h-8 bg-[#119766] rounded-md text-[#F2F2F2] w-[30%] md:w-[20%] lg:w-[10%]"
                type="submit"
                >
                Search
                </button>
        </form>

        {
          filteredData.length > 0 ? 
            (filteredData.map((item, index) => (
                  <JobCard 
                      key={index}
                      id={item._id}
                      img={item.iconImage}
                      title={item.postName}
                      date={item.beginDate}
                      lastDate={item.lastDate}
                      saveBtn="block"
                      removeBtn="hidden"
                      postlink={item.postlink}
                      yyyymmddDate={item.yyyymmddDate}
                      yyyymmddDateLine="Block"
                      createdDate={item.createdAt}
                  />
              )))
              :
              <div className="h-96 w-full flex justify-center items-center">
                <h1 className=' text-lg font-Jost font-bold capitalize'>no Data found</h1>
              </div>
        }
       
    </div>
    <Footer/>
    </>
    )}
    </>
  )
}

export default Home