import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "../../../../utils/Axios";
import Cookies from 'js-cookie';
import NavBar from '../../AdminElements/NavBar';
import Input from '../../../Elements/Input';


const StatePost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const accessToken = Cookies.get('cb_chec');


  const onSubmit = async (data) => {
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const formData = new FormData();
      
      Object.keys(data).forEach(key => {
        if (key === 'iconImage' || key === 'postImage') {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await axios.post('/statejob/create', formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setLoading(false);
      setSuccess('Job post created successfully!');
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'An error occurred while creating the job post.');
      console.error(error);
    }
  };

  return (
    <>
    <NavBar/>
    {loading === true ? 
  (
    <div className="h-screen w-full flex bg-black justify-center items-center">
      <div className="border-[5px] h-12 w-12 rounded-full border-t-[#119766] animate-spin"
      ></div>
    </div>
    
  ) : (
    <div className="relative bg-black ">
      <img className='w-full md:hidden' src="/Images/Banner.svg" alt="" />
      <img className='w-full hidden md:block lg:hidden' src="/Images/Bannermd.svg" alt="" />
      <img className='w-full hidden lg:block' src="/Images/BannerLG.svg" alt="" />
        <div className="px-5 absolute top-56 w-screen md:px-16 ">
          <form action="">
            <div className="w-full rounded-lg overflow-hidden ">
              <div className="w-full bg-zinc-900 px-5 pt-8 pb-4 md:flex gap-5">
                <div className=" h-24 w-24 md:h-28 md:w-28 pl-4 pb-6 lg:pl-6 rounded-full bg-white flex justify-center items-center">
                    <Input
                      label="Icon Image"
                      labelclass="text-xs capitalize text-white"
                      type="file"
                      className='border h-16 w-16 rounded-full block bg-transparent border-black text-xs px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder="Email"
                      {...register('email', {
                          required: "IconImage is required",
                      })}
                    />
                </div>
                <div className="py-5 space-y-3">
                    <h1 className="text-xl md:text-2xl font-Jost font-bold text-zinc-400">"jhgdf"</h1>
                    <h5 className='font-Jost text-sm md:text-base text-zinc-400'>Important Dates</h5>

                    <div className=" flex gap-3 flex-wrap">
                        <p className="text-xs md:text-sm font-Jost rounded font-semibold text-[#0E0202] capitalize px-2 py-1 bg-zinc-700" > <span> ✩ Begin:</span> "dsgt" </p>
                        <p className="text-xs md:text-sm font-Jost rounded font-semibold text-[#D03030] capitalize px-2 py-1 bg-zinc-700" > <span> ✩ Last Date:</span> "dsfg"</p>
                        <p className="text-xs md:text-sm font-Jost rounded font-semibold text-[#0E0202] capitalize px-2 py-1 bg-zinc-700" > <span> ✩ Time left:</span> "sdfg "</p>
                    </div>
                </div>
            </div>
              
                
            </div>
          </form>
        </div>
    </div>
  )}
    </>
  )
}

export default StatePost;

