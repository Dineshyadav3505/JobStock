import React from 'react'
import { useForm } from 'react-hook-form';

const SearchBox = (
    { 
        placeholder = 'Search',
    }
) => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => console.log(data);

    const handleReset = () => {
        reset();
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border rounded-md p-2 w-full">
      <div className="flex items-center">
        <input
          {...register('searchTerm')}
          className="w-[70%] text-base text-black focus:bg-transparent outline-none px-2"
          type="text"
          placeholder={placeholder}
        />
        <button
          className="h-12 bg-[#119766] rounded-md text-[#F2F2F2] w-[30%]"
          type="submit"
          onClick={handleReset}
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBox