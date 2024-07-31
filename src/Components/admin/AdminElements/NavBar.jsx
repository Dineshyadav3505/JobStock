import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from '../../../utils/Axios';
import Social from './Social';
import Cookies from 'js-cookie';

const NavBar = () => {
    const location = useLocation();
    const [data, setData] = useState([]);

    const [notification, setNotifications] = useState(false)
    const [sideMenu , setSideMenu] = useState(false)
    const accessToken = Cookies.get('cb_chec');

    const toggleNotification = () => {
      setNotifications(!notification);
      const fetchProducts = async () => {
        try {
          const response = await axios.get('/notifiction/notificition');

          setData(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProducts();

    };


    const toggleSideMenu = () => {
        setSideMenu(!sideMenu);
    };

    const isActive = (path) => {
      return location.pathname === path;
    };
  
  return (
    <>
    {/* Mobbile Top NavBar */}
    <div className=' flex py-4 justify-between px-4 border-b-[1px] bg-black text-zinc-600 relative'>
        <div className="flex  justify-between lg:w-[60%]">
            <h1 className='font-serif font-black text-xl tracking-tighter text-[#119766]'>Naukri<span className=' font-Jost text-[#f4b27b]'>VACANCY</span></h1>
            <div className=" text-base hidden font-Jost px-5 lg:flex gap-4 items-end ">
                <NavLink to="/admin"           className={` font-serif ${isActive('/admin')     ? 'font-serif text-zinc-400 text-sx' : 'text-zinc-600'}`}> Latest Job</NavLink>
                <NavLink to="/admin/result"     className={` font-serif ${isActive('/admin/result')    ? 'font-serif text-zinc-400 text-sx' : 'text-zinc-600'}`}> Result</NavLink>
                <NavLink to="/admin/statejob"   className={` font-serif ${isActive('/admin/statejob')  ? 'font-serif text-zinc-400 text-sx' : 'text-zinc-600'}`}> State Jobs</NavLink>
                <NavLink to="/admin/admitCard"  className={` font-serif ${isActive('/admin/admitCard') ? 'font-serif text-zinc-400 text-sx' : 'text-zinc-600'}`}> Admit Card</NavLink>
            </div>
        </div>

        <div className=" flex gap-4 justify-end lg:w-44 ">
        <button
            onClick={toggleNotification}
            className="hidden md:block relative"
            >
            <span className="absolute rounded-full top-0 right-0 h-2 w-2 bg-red-500"></span>
            <span className="sr-only">Notifications</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>
        </button>            
        <button onClick={toggleSideMenu} className='menu button' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>

        </button>
        </div>

        {notification === true ? (
            <div className="bg-gray-900 z-50 rounded-2xl w-1/5 p-4 absolute top-14 right-10">
                <div className="text-gray-700 h-96  overflow-x-auto space-y-2">
                    <h1 className='font-Jost  flex items-end gap-1 text-sm'> <img src="/Images/noti.svg" alt="" />Notification</h1>
                    {data.map((item, index) => (
                        <div className="px-2 py-1 bg-slate-100 rounded ">
                            <div className="flex items-center justify-between">
                                <h1 className="text-sm font-bold font-bitter capitalize text-gray-700">{item.title}</h1>
                            </div>
                            <p className="text-gray-700 font-Jost text-sm px-2 ">{item.message}</p>
                        </div>
                    ))}
                </div>
                <div className="absolute -top-2 rotate-90 right-6 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-gray-200 border-b-0 border-l-0"></div>
                <div className="absolute -top-2           right-8 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-gray-200 border-b-0 border-l-0"></div>
            </div>
        ) : null}

        {sideMenu == true ? 
            (
                <div className=" absolute flex flex-col right-0 z-50 bg-zinc-900 drop-shadow-md rounded-l-2xl top-0 w-[70%] lg:w-1/3 py-5 px-5">
                    <div className="">
                        <button className='w-full flex justify-end mb-5' onClick={toggleSideMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                        <NavLink to="/admin"            className="p-2 flex hover:bg-zinc-700 rounded-md mt-1 items-center text-xl gap-2 "> <p  className='font-Jost text-zinc-600 font-medium' > Latest job                </p> </NavLink>
                        <NavLink to="/admin/upcomming"   className="p-2 flex hover:bg-zinc-700 rounded-md mt-1 items-center text-xl gap-2 "> <p  className='font-Jost text-zinc-600 font-medium' > Up-comming Update         </p> </NavLink>
                        <NavLink to="/admin/admission"   className="p-2 flex hover:bg-zinc-700 rounded-md mt-1 items-center text-xl gap-2 "> <p  className='font-Jost text-zinc-600 font-medium' > Admission                 </p> </NavLink>
                        <NavLink to="/admin/answer_Key"  className="p-2 flex hover:bg-zinc-700 rounded-md mt-1 items-center text-xl gap-2 "> <p  className='font-Jost text-zinc-600 font-medium' > Answer Key                </p> </NavLink>
                        {accessToken?.length > 20 ? (
                            <NavLink onClick={LogOut} className="p-2 flex hover:bg-zinc-700 rounded-md mt-1 items-center text-xl gap-2 ">  <p className='font-Jost text-zinc-600 font-medium' > LogOut </p> </NavLink>
                        ):(
                            <NavLink to="/login" className="p-2 flex hover:bg-zinc-700 rounded-md mt-1 items-center text-xl gap-2 "> <p className='font-Jost text-zinc-600 font-medium' > LogIn </p> </NavLink>
                        )}
                    </div>
                    <Social/>
                </div>

            ): null
        }

    </div>

    {/* Mobile Bottom NavBar */}
    <div className="fixed z-20 bottom-0 py-4 bg-black w-full text-zinc-400 flex justify-around lg:hidden font-Jost ">

        <NavLink to="/admin" className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            <span classNameName="text-sm ">Latest Job</span>
        </NavLink>

        <NavLink to="/admin/result" className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </svg>
            <span className="text-sm">Result</span>
        </NavLink>

        <NavLink to="/admin/statejob" className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <span className="text-sm">State Jobs</span>
        </NavLink>

        <NavLink to="/admin/admitCard" className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>
            <span className="text-sm">Admit Card</span>
        </NavLink>
    </div>
    </>
  )
}

export default NavBar

const LogOut = () => {
    Cookies.remove('cb_chec');
}