import React, { useState } from 'react';
import NavBar from '../../Elements/NavBar';
import { useForm } from 'react-hook-form';
import Input from './Input';
import axios from '../../../utils/Axios';

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState([]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/users/logIn',
            {
                email: data.email,
                password: data.password
            });
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data.message);
            setData(error.response.data.message);
        }
    };

    return (
        <>
            <NavBar />
            <div className='flex justify-center  px-3 md:px-16 py-10 md:py-44 lg:px-96 '>
                <div className="bg-gray-200 py-8 px-10 flex w-full rounded-lg shadow-md flex-col">
                    <h1 className='text-black py-3 text-2xl font-bold text-center'>Log In</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 mx-auto'>
                    {data && <p className="text-red-500 text-xs text-center ">{data}</p>}

                        <Input
                            label="Email"
                            labelclass={`text-xs capitalize ${errors.email ? "text-red-500" : "text-black"}`}
                            type="email"
                            className='border w-full md:w-96 h-10 block bg-transparent border-black rounded-md text-xs px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder="Email"
                            {...register('email', {
                                required: "Email is required",
                                validate: {
                                    matchPattern: (value) =>
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

                        <Input
                            label="Password"
                            labelclass={`text-xs capitalize ${errors.password ? "text-red-500" : "text-black"}`}
                            type="password"
                            className='border w-full md:w-96 h-10 block bg-transparent border-black rounded-md text-xs px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder="Password"
                            {...register('password', {
                                required: "Password is required",
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                        <button className='block bg-blue-500 text-white px-4 py-2 rounded mx-auto hover:bg-blue-600 transition duration-200' type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;