import React from 'react';
import AdminNavbar from '../../Admin/AdminNavbar';
import SideNavbar from '../../Admin/SideNavbar';
import { useForm } from 'react-hook-form';
import Input from '../../Elements/Input';
import axios from "../../../utils/Axios"
import Cookies from 'js-cookie';

const JobPost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = React.useState('')
  const accessToken = Cookies.get('cb_chec');

  const data = [
    { label: 'Job Title', placeholder: 'Enter job title', registername: 'postName', required: true },
    { label: 'Job Description', placeholder: 'Enter job description', registername: 'postDescription', required: true },
    { label: 'Last Date to Apply', placeholder: '04 Aug 2024', registername: 'lastDate', required: true },
    { label: 'Begin Date', placeholder: '04 Aug 2024', registername: 'beginDate', required: true },
    { label: 'Date 1', placeholder: 'YYYY-MM-DD', registername: 'date1', required: false },
    { label: 'Date 2', placeholder: 'YYYY-MM-DD', registername: 'date2', required: false },
    { label: 'Date 3', placeholder: 'YYYY-MM-DD', registername: 'date3', required: false },
    { label: 'Date 4', placeholder: 'YYYY-MM-DD', registername: 'date4', required: false },
    { label: 'Date 5', placeholder: 'YYYY-MM-DD', registername: 'date5', required: false },
    { label: 'Date 6', placeholder: 'YYYY-MM-DD', registername: 'date6', required: false },
    { label: 'Date 7', placeholder: 'YYYY-MM-DD', registername: 'date7', required: false },
    { label: 'Date 8', placeholder: 'YYYY-MM-DD', registername: 'date8', required: false },
    { label: 'Date 9', placeholder: 'YYYY-MM-DD', registername: 'date9', required: false },
    { label: 'Date 10', placeholder: 'YYYY-MM-DD', registername: 'date10', required: false },
    { label: 'Fee 1', placeholder: 'Enter fee', registername: 'Fee1', required: false },
    { label: 'Fee 2', placeholder: 'Enter fee', registername: 'Fee2', required: false },
    { label: 'Fee 3', placeholder: 'Enter fee', registername: 'Fee3', required: false },
    { label: 'Fee 4', placeholder: 'Enter fee', registername: 'Fee4', required: false },
    { label: 'Fee 5', placeholder: 'Enter fee', registername: 'Fee5', required: false },
    { label: 'Fee 6', placeholder: 'Enter fee', registername: 'Fee6', required: false },
    { label: 'Fee 7', placeholder: 'Enter fee', registername: 'Fee7', required: false },
    { label: 'Fee 8', placeholder: 'Enter fee', registername: 'Fee8', required: false },
    { label: 'Fee 9', placeholder: 'Enter fee', registername: 'Fee9', required: false },
    { label: 'Fee 10', placeholder: 'Enter fee', registername: 'Fee10', required: false },
    { label: 'Age Group 1', placeholder: 'Enter age', registername: 'age1', required: false },
    { label: 'Age Group 2', placeholder: 'Enter age', registername: 'age2', required: false },
    { label: 'Age Group 3', placeholder: 'Enter age', registername: 'age3', required: false },
    { label: 'Age Group 4', placeholder: 'Enter age', registername: 'age4', required: false },
    { label: 'Age Group 5', placeholder: 'Enter age', registername: 'age5', required: false },
    { label: 'Age Group 6', placeholder: 'Enter age', registername: 'age6', required: false },
    { label: 'Age Group 7', placeholder: 'Enter age', registername: 'age7', required: false },
    { label: 'Age Group 8', placeholder: 'Enter age', registername: 'age8', required: false },
    { label: 'Age Group 9', placeholder: 'Enter age', registername: 'age9', required: false },
    { label: 'Age Group 10', placeholder: 'Enter age', registername: 'age10', required: false },
    { label: 'Total Post', placeholder: 'Enter total posts', registername: 'totalPost', required: true },
    { label: 'Icon Image', placeholder: 'Upload icon image', registername: 'iconImage', required: true, type: 'file' },
    { label: 'Post Image', placeholder: 'Upload post image', registername: 'postImage', required: true, type: 'file' },
    { label: 'Apply Link', placeholder: 'Enter apply link',  registername: 'applyLink', required: true },
  ];


  const onSubmit = async(data) => {

      try {
        console.log(data);
        const response = await axios.post('/job/create', {
          postName: data.postName,
          postDescription: data.postDescription,
          lastDate: data.lastDate,
          beginDate: data.beginDate,
          date1: data.date1,
          date2: data.date2,
          date3: data.date3,
          date4: data.date4,
          date5: data.date5,
          date6: data.date6,
          date7: data.date7,
          date8: data.date8,
          date9: data.date9,
          date10: data.date10,
          Fee1: data.Fee1,
          Fee2: data.Fee2,
          Fee3: data.Fee3,
          Fee4: data.Fee4,
          Fee5: data.Fee5,
          Fee6: data.Fee6,
          Fee7: data.Fee7,
          Fee8: data.Fee8,
          Fee9: data.Fee9,
          Fee10: data.Fee10,
          age1: data.age1,
          age2: data.age2,
          age3: data.age3,
          age4: data.age4,
          age5: data.age5,
          age6: data.age6,
          age7: data.age7,
          age8: data.age8,
          age9: data.age9,
          age10: data.age10,
          totalPost: data.totalPost,
          iconImage: data.iconImage,
          postImage: data.postImage,
          applyLink: data.applyLink,
        },{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        console.log(response);
    } catch (error) {
      console.log(error);
        setError(error);
    };
  };

  return (
    <div className='bg-zinc-900'>
      <AdminNavbar />
      <div className="flex">
        <div className="w-full px-16 py-5">
          <h1 className='text-white text-center'>Job Post</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex flex-wrap justify-center items-center space-y-3">
              {data.map((item, index) => (
                <Input
                  key={index}
                  label={item.label}
                  labelclass={`text-xs capitalize ${errors[item.registername] ? "text-red-500" : "text-white"}`}
                  type={item.type || 'text'}
                  className='border text-white w-full md:w-96 h-10 block bg-transparent border-zinc-700 rounded-md text-xs px-4 focus:outline-none focus:ring-2 focus:ring-zinc-500'
                  placeholder={item.placeholder}
                  {...register(item.registername, {
                    required: item.required ? `${item.label} is required` : false,
                  })}
                />
              ))}
              {error && <p className="text-red-500 text-xs text-center ">{error}</p>} 
            </div>
            <button type="submit" className="bg-blue-500 block mx-auto mt-8 hover:bg-blue-700 text-white py-1 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
        <SideNavbar />
      </div>
    </div>
  );
}

export default JobPost;