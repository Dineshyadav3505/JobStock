import React from 'react'
import AdminNavbar from '../../Admin/AdminNavbar'
import SideNavbar from '../../Admin/SideNavbar'
import { useForm } from 'react-hook-form';
import Input from '../../Elements/Input';

const JobPost = () => {

  const { register, handleSubmit, reset } = useForm();
  const [errors, setErrors] = React.useState({});

  const data =[
    {label: 'Job Title', placeholder: 'job', registename: 'jobTitle'},
  ]

  return (
  <div className='bg-zinc-900'>
    <AdminNavbar/>
    <div className="flex">
      <div className="w-full px-16 py-5">
        <h1 className='text-white text-center'>Job Post</h1>
        <form action="">
          <div className=" flex flex-col justify-center items-center mx-auto ">
            {data.map((item, index) => (
              <Input
                  label={item.label}
                  labelclass={`text-xs capitalize ${errors.password ? "text-red-500" : "text-white"}`}
                  type="text"
                  className='border text-white w-full md:w-96 h-10 block bg-transparent border-zinc-700 rounded-md text-xs px-4 focus:outline-none focus:ring-2 focus:ring-zinc-500'
                  placeholder={item.placeholder}
                  {...register(item.registename, {
                      required: "Password is required",
                  })}
              />
            ))}
              
              

          </div>
        </form>
        
      </div>
      <SideNavbar/>
  
    </div>

  </div>
  )
}

export default JobPost