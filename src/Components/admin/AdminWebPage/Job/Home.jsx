import React, { useEffect, useState, useHistory } from 'react'
import NavBar from '../../AdminElements/NavBar'
import JobCard from '../../AdminElements/JobCard'
import { useForm } from 'react-hook-form';
import axios from '../../../../utils/Axios';
import ReactGA from 'react-ga';

const AdminHome = () => {
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
          <div className="h-screen w-full bg-black flex justify-center items-center">
            <div className="border-[5px] h-12 w-12 rounded-full border-t-[#119766] animate-spin"
            ></div>
          </div>
    ) : (
    <div className="p-5 flex flex-wrap justify-between bg-black pb-24">
        <form onSubmit={handleSubmit(onSubmit)} className="border rounded-md p-2 w-full">
                <input
                {...register('searchTerm')}
                className="w-[70%] md:w-[80%] lg:w-[90%] text-base bg-black text-zinc-400 focus:bg-transparent outline-none px-2"
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
              <div className="h-[90vh] w-full flex justify-center items-center">
                <h1 className=' text-lg font-Jost text-zinc-700 font-bold capitalize'>no Data found</h1>
              </div>
        }

    </div>
    )}
    </>
  )
}

export default AdminHome;