import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "../../../utils/Axios";
import Cookies from 'js-cookie';
import AdminNavbar from '../../Admin/AdminNavbar';
import SideNavbar from '../../Admin/SideNavbar';

const AdmissionPost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const accessToken = Cookies.get('cb_chec');

  const formFields = [
    { label: 'Job Title', placeholder: 'Enter job title', name: 'postName', required: true },
    { label: 'Job Description', placeholder: 'Enter job description', name: 'postDescription', required: true },
    { label: 'Begin Date', placeholder: '01 Jan 2024', name: 'beginDate', required: true, type: 'text' },
    { label: 'Last Date to Apply', placeholder: '01 Jan 2024', name: 'lastDate', required: true, type: 'text' },
    { label: 'Last Date for days left', placeholder: '2024-01-01', name: 'yyyymmddDate', required: true, type: 'text' },
    ...Array.from({ length: 10 }, (_, i) => ({ label: `Date ${i + 1}`, placeholder: `Date ${i + 1}`, name: `date${i + 1}` })),
    ...Array.from({ length: 10 }, (_, i) => ({ label: `Fee ${i + 1}`, placeholder: `Fee ${i + 1}`, name: `Fee${i + 1}` })),
    ...Array.from({ length: 10 }, (_, i) => ({ label: `Age ${i + 1}`, placeholder: `Age ${i + 1}`, name: `age${i + 1}` })),
    { label: 'Total Post', placeholder: 'Enter total posts', name: 'totalPost', required: true, type: 'number' },
    { label: 'Icon Image', placeholder: 'Upload icon image', name: 'iconImage', required: true, type: 'file' },
    { label: 'Post Image', placeholder: 'Upload post image', name: 'postImage', required: true, type: 'file' },
    { label: 'Apply Link', placeholder: 'Enter apply link', name: 'applyLink', required: true },
  ];

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

      const response = await axios.post('/admission/create', formData, {
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
    <div className='bg-zinc-900 min-h-screen'>
      <AdminNavbar />
      <div className="flex">
        <div className="w-full px-8 md:px-16 py-5 relative mb-10">
          <h1 className='text-white text-center text-2xl font-bold mb-6'>Create Admission  Post</h1>
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
                Create Admission Post
              </button>
            </form>
          )}
        </div>
        <SideNavbar />
      </div>
    </div>
  );
}

export default AdmissionPost;