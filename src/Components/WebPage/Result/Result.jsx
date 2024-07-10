import React, { useEffect, useState } from 'react'
import NavBar from '../../Elements/NavBar'
import { useForm } from 'react-hook-form';
import JobCard from '../../Elements/JobCard'
import axios from '../../../utils/Axios';
import { useSelector, useDispatch } from'react-redux'
import { setResultPost } from "../../../Store/allResultPost"
import Loader from '../../Elements/Loader'

const Result = () => {

  const data = useSelector((state) => state.jobPost.product);
  const [Loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formData) => {
    const { searchTerm: newSearchTerm } = formData;
    setSearchTerm(newSearchTerm);
    reset();
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/result/result', {
          params: {
            searchTerm
          }
        });
        dispatch(setResultPost(response.data.data));
        setFilteredData(response.data.data);
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
  {Loading === true ? (Loader) : 
    (
    <div className="p-5 flex flex-wrap justify-between pb-24">
        <form onSubmit={handleSubmit(onSubmit)} className="border rounded-md p-2 w-full">
                <input
                {...register('searchTerm')}
                className="w-[70%] md:w-[80%] lg:w-[90%] text-base text-black focus:bg-transparent outline-none px-2"
                type="text"
                placeholder='Search for Result...'
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
                      id={item.id}
                      img={item.iconImage}
                      title={item.postName}
                      date={item.beginDate}
                      lastDate={item.lastDate}
                      saveBtn="block"
                      removeBtn="hidden"
                      applyBtn={item._id}
                      yyyymmddDate={item.yyyymmddDate}
                      resultupdateclass="Block"
                      resultupdate={item.updatedAt}
                      children="View Result"
                  />
              )))
              :
              <div className="h-96 w-full flex justify-center items-center">
                <h1 className=' text-lg font-Jost font-bold capitalize'>no Data found</h1>
              </div>
        }

    </div>
    )}
  </>
)
}

export default Result