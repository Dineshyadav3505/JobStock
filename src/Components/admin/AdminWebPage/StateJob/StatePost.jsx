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
          if (data[key] && data[key].length > 0) {
            for (let i = 0; i < data[key].length; i++) {
              formData.append(key, data[key][i]);
            }
          }
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
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'An error occurred while creating the job post.');
      console.error(error);
    }
  };

  return (
    <>
      <NavBar/>
      {loading ? (
        <div className="h-screen w-full flex bg-black justify-center items-center">
          <div className="border-[5px] h-12 w-12 rounded-full border-t-[#119766] animate-spin"></div>
        </div>
      ) : (
        <div className="relative bg-black">
          <img className='w-full md:hidden' src="/Images/Banner.svg" alt="Banner" />
          <img className='w-full hidden md:block lg:hidden' src="/Images/Bannermd.svg" alt="Banner" />
          <img className='w-full hidden lg:block' src="/Images/BannerLG.svg" alt="Banner" />
          <div className="px-5 absolute top-56 w-screen md:px-16">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full rounded-t-lg overflow-hidden">
                <div className="w-full bg-zinc-900 px-5 pt-8 pb-4 md:flex gap-10">
                  <div className="h-24 w-56 md:h-28 md:w-56 pl-4 pb-6 lg:pl-6 rounded-md bg-zinc-900 flex justify-center items-center">
                    <Input
                      label="Icon Image"
                      labelclass="text-xs capitalize text-white"
                      type="file"
                      className='border h-16 w-56 rounded-md block bg-transparent border-white text-xs text-zinc-400 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder="Icon Image"
                      {...register('iconImage', {
                        required: "Icon Image is required",
                      })}
                    />
                  </div>
                  <div className="py-5 space-y-3">
                    <Input
                      label="Post Name"
                      labelclass="text-xs capitalize text-white"
                      type="text"
                      className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                      placeholder="Post Name"
                      {...register('postName', {
                        required: "Post Name is required",
                      })}
                    />
                    {errors.postName && <span className="text-red-500 text-xs">{errors.postName.message}</span>}

                    <h5 className='font-Jost text-sm md:text-base text-zinc-400'>Important Dates</h5>
                    <div className="flex gap-3">
                      <Input
                        label="Apply Date"
                        labelclass="text-xs capitalize text-white"
                        type="text"
                        className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                        placeholder="12 Aug 2024"
                        {...register('beginDate', {
                          required: "Apply date is required",
                        })}
                      />
                      {errors.beginDate && <span className="text-red-500 text-xs">{errors.beginDate.message}</span>}
                      <Input
                        label="Last Date"
                        labelclass="text-xs capitalize text-white"
                        type="text"
                        className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                        placeholder="12 Aug 2024"
                        {...register('lastDate', {
                          required: "Last date is required",
                        })}
                      />
                      {errors.lastDate && <span className="text-red-500 text-xs">{errors.lastDate.message}</span>}
                      <Input
                        label="YYYY-MM-DD Date"
                        labelclass="text-xs capitalize text-white"
                        type="text"
                        className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                        placeholder="2024-08-12"
                        {...register('yyyymmddDate', {
                          required: "Date is required",
                        })}
                      />
                      {errors.yyyymmddDate && <span className="text-red-500 text-xs">{errors.yyyymmddDate.message}</span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-5 px-7 bg-zinc-900 space-y-2">
                <Input
                  label="Post Description"
                  labelclass="text-xs capitalize text-white"
                  type="text"
                  className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                  placeholder="Post Description"
                  {...register('postDescription', {
                    required: "Post Description is required",
                  })}
                />
                {errors.postDescription && <span className="text-red-500 text-xs">{errors.postDescription.message}</span>}

                <div className="w-full rounded-md border px-4 py-2 border-zinc-700">
                  <div className="flex gap-3 flex-wrap">
                    {[...Array(10)].map((_, index) => (
                      <Input
                        key={`date${index + 1}`}
                        width="56px"
                        label={`Date${index + 1}`}
                        labelclass="text-xs capitalize text-white"
                        type="text"
                        className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                        placeholder="Date"
                        {...register(`date${index + 1}`)}
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full rounded-md border px-4 py-2 border-zinc-700">
                  <div className="flex gap-3 flex-wrap">
                    {[...Array(10)].map((_, index) => (
                      <Input
                        key={`fee${index + 1}`}
                        width="56px"
                        label={`Fee${index + 1}`}
                        labelclass="text-xs capitalize text-white"
                        type="text"
                        className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                        placeholder="Fee"
                        {...register(`Fee${index + 1}`)}
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full rounded-md border px-4 py-2 border-zinc-700">
                  <div className="flex gap-3 flex-wrap">
                    {[...Array(10)].map((_, index) => (
                      <Input
                        key={`age${index + 1}`}
                        width="56px"
                        label={`Age${index + 1}`}
                        labelclass="text-xs capitalize text-white"
                        type="text"
                        className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                        placeholder="Age"
                        {...register(`age${index + 1}`)}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap w-full rounded-md border px-4 py-2 border-zinc-700">
                  <Input
                    width="56px"
                    label="State Name"
                    labelclass="text-xs capitalize text-white"
                    type="text"
                    className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                    placeholder="State"
                    {...register('state', {
                      required: "State name is required",
                    })}
                  />
                  {errors.stateName && <span className="text-red-500 text-xs">{errors.stateName.message}</span>}
                  <Input
                    width="56px"
                    label="Total Post"
                    labelclass="text-xs capitalize text-white"
                    type="text"
                    className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                    placeholder="Total Post"
                    {...register('totalPost', {
                      required: "TotalPost is required",
                    })}
                  />
                  {errors.totalPost && <span className="text-red-500 text-xs">{errors.totalPost.message}</span>}
                  <Input
                    width="56px"
                    label="Apply Link"
                    labelclass="text-xs capitalize text-white"
                    type="text"
                    className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                    placeholder="https://www.example.com"
                    {...register('applyLink', {
                      required: "Apply Link is required",
                    })}
                  />
                  {errors.applyLink && <span className="text-red-500 text-xs">{errors.applyLink.message}</span>}
                  <Input
                    width="56px"
                    label="Post Image"
                    labelclass="text-xs capitalize text-white"
                    type="file"
                    className='border h-10 w-full rounded-md block bg-transparent border-zinc-700 text-xs px-4 focus:outline-none text-zinc-400 focus:ring-2 focus:ring-blue-500'
                    placeholder="Post Image"
                    multiple
                    {...register('postImage', {
                      required: "Post image is required",
                    })}
                  />
                  {errors.postImage && <span className="text-red-500 text-xs">{errors.postImage.message}</span>}
                </div>
              </div>



              <div className="flex flex-col gap-2 justify-center items-center py-5 mb-24 bg-zinc-900 rounded-b-md ">
                {error && <div className="text-red-500 text-xs">{error}</div>}
                {success && <div className="text-green-500 text-xs">{success}</div>}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StatePost;
