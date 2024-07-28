import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "../../../utils/Axios";
import Cookies from 'js-cookie';
import AdminNavbar from '../../Admin/AdminNavbar';
import SideNavbar from '../../Admin/SideNavbar';

const NotificationPost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const accessToken = Cookies.get('cb_chec');

  const formFields = [
    { label: 'title', placeholder: 'title', name: 'title', required: true },
    { label: 'message', placeholder: 'message', name: 'message', required: true },

  ];

  const onSubmit = async (data) => {
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      console.log(data);
      
      const response = await axios.post('/notifiction/create', {
        title: data.title,
        message: data.message,
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      setLoading(false);
      setSuccess('Notification created successfully!');
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'An error occurred while creating the post.');
      console.error(error);
    }
  };

  return (
    <div className='bg-zinc-900 min-h-screen'>
      <AdminNavbar />
      <div className="flex">
        <div className="w-full px-8 md:px-16 py-5 relative">
          <h1 className='text-white text-center text-2xl font-bold mb-6'>Create State job Post</h1>
          {loading ? (
            <div className="h-screen w-full flex justify-center items-center">
              <div className="border-[5px] h-12 w-12 rounded-full border-t-[#119766] animate-spin"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {formFields.map((field, index) => (
                  <div key={index} className="flex flex-col">
                    <label className={`text-sm font-medium mb-1 px-2 ${errors[field.name] ? "text-red-500" : "text-white"}`}>
                      {field.label}
                    </label>
                    <input
                      type={field.type || 'text'}
                      className='border text-white w-full h-10 bg-transparent border-zinc-700 rounded-md text-sm px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder={field.placeholder}
                      {...register(field.name, {
                        required: field.required ? `${field.label} is required` : false,
                      })}
                    />
                    {errors[field.name] && <p className="text-red-500 px-2 text-xs mt-1">{errors[field.name].message}</p>}
                  </div>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              {success && <p className="text-green-500 text-sm text-center">{success}</p>}
              <button type="submit" className="bg-blue-500 w-full md:w-auto block mx-auto mt-8 hover:bg-blue-700 text-white py-1 px-4 rounded-md transition duration-300">
                Create Notification Post
              </button>
            </form>
          )}
        </div>
        <SideNavbar />
      </div>
    </div>
  );
}

export default NotificationPost