import React, { useEffect, useState, useHistory } from 'react'
import NavBar from '../../AdminElements/NavBar'
import JobCard from '../../AdminElements/JobCard'
import { useForm } from 'react-hook-form';
import axios from '../../../../utils/Axios';
import ReactGA from 'react-ga';
import { NavLink } from 'react-router-dom';


const AdminStateJob = () => {
    const [Loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [stateFilter, setStateFilter] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const { register, handleSubmit, reset } = useForm();

  

    const onSubmit = (formData) => {
        const { searchTerm: newSearchTerm } = formData;
        setSearchTerm(newSearchTerm);
    };

    const filter = () => {
        setStateFilter(!stateFilter);
    };

    const statesOfIndia = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
    ];

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/statejob/job', {
                    params: {
                        searchTerm,
                        state: selectedState 
                    }
                });
                setFilteredData([...response.data.data].reverse());
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [searchTerm, selectedState]);

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    return (
        <>
            <NavBar />
            {Loading ? (
                <div className="h-screen w-full bg-black flex justify-center items-center">
                    <div className="border-[5px] h-12 w-12 rounded-full border-t-[#119766] animate-spin"></div>
                </div>
            ) : (
                <div className="p-5 flex flex-wrap bg-black justify-between pb-24">
                    <div className="lg:flex w-full gap-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="border rounded-md p-2 w-full">
                            <input
                                {...register('searchTerm')}
                                className="w-[70%] md:w-[80%] lg:w-[90%] text-base text-black bg-black focus:bg-transparent outline-none px-2"
                                type="text"
                                placeholder='Search for State Job...'
                            />
                            <button
                                className="h-12 lg:h-8 bg-[#119766] rounded-md text-[#F2F2F2] w-[30%] md:w-[20%] lg:w-[10%]"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>

                        <div onClick={filter} className="border mt-3 text-[#119766] lg:mt-0 rounded-md py-2 items-center justify-center px-6 flex gap-2 select-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg>

                            <button className="h-8 select-none rounded-md text-[#119766]"> Filter </button>
                        </div>
                    </div>

                    <NavLink to='/admin/statejobPost' className={` h-10 w-full mt-3 rounded-md bg-[#119766] flex justify-center items-center text-[#F2F2F2] font-semibold`}> Create State Job Post </NavLink>

                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
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
                            />
                        ))
                        
                    ) : (
                        <div className="h-96 w-full flex justify-center items-center">
                            <h1 className='text-lg font-Jost font-bold capitalize'>No Data Found</h1>
                        </div>
                    )}
                </div>
            )}

            {stateFilter && (
                <div className='absolute top-0 z-50 w-full flex justify-center items-center bg-[rgba(0,0,0,0.4)] px-3 lg:px-28 pt-28 h-full'>
                    <div className="bg-zinc-900 w-full p-3 rounded-xl">
                        <div className="flex justify-between text-zinc-400">
                            <h4 className='text-xl font-Jost text-zinc-400 font-semibold'>Select Your State</h4>
                            <svg onClick={filter} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </div>
                        <div className="py-3 mt-3 flex flex-wrap gap-3">
                            {statesOfIndia.map((state) => (
                                <div key={state}
                                className={`px-2 py-1 rounded-md flex items-center gap-2 ${selectedState === state ? 'bg-[#119766]' : 'bg-[#F2F2F2]'} hover:bg-[#119766]`}                                    >
                                    <input
                                        type="radio"
                                        id={state}
                                        name="state"
                                        value={state}
                                        className='hidden'
                                        checked={selectedState === state}
                                        onChange={handleStateChange}
                                    />
                                    <label htmlFor={state}>{state}</label>
                                </div>
                                
                            ))}
                        </div>
                        <button onClick={filter} className='mx-auto block py-2 px-4 bg-[#119766] rounded'>Apply Filter</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminStateJob;
