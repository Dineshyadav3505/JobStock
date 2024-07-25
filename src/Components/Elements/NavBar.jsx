import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from '../../utils/Axios';
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
    <div className=' flex py-4 justify-between px-4 border-b-[1px] relative'>
        <div className="flex  justify-between lg:w-[60%]">
            <h1 className='font-serif font-black text-xl tracking-tighter text-[#119766]'>Naukri<span className=' font-Jost text-[#f4b27b]'>VACANCY</span></h1>
            <div className=" text-base hidden font-Jost px-5 lg:flex gap-4 items-end ">
                <NavLink to="/"           className={` font-serif ${isActive('/')          ? 'font-serif font-black text-sx' : ''}`}> Latest Job</NavLink>
                <NavLink to="/result"     className={` font-serif ${isActive('/result')    ? 'font-serif font-black text-sx' : ''}`}> Result</NavLink>
                <NavLink to="/statejob"   className={` font-serif ${isActive('/statejob')  ? 'font-serif font-black text-sx' : ''}`}> State Jobs</NavLink>
                <NavLink to="/admitCard"  className={` font-serif ${isActive('/admitCard') ? 'font-serif font-black text-sx' : ''}`}> Admit Card</NavLink>
            </div>
        </div>

        <div className=" flex gap-4 justify-end lg:w-44 ">
        <button
            onClick={toggleNotification}
            className="hidden md:block relative"
            >
            <span className="absolute rounded-full top-0 right-0 h-2 w-2 bg-red-500"></span>
            <span className="sr-only">Notifications</span>
            <img src="/Images/notification.svg" alt="" />
        </button>            
        <button onClick={toggleSideMenu} className='menu button' > <img src="/Images/Search.svg" alt="" /> </button>
        </div>

        {notification === true ? (
            <div className="bg-gray-200 z-50 rounded-2xl w-1/5 p-4 absolute top-14 right-10">
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
                <div className=" absolute flex flex-col right-0 z-50 bg-zinc-100 drop-shadow-md rounded-l-2xl top-0 w-[70%] lg:w-1/3 py-5 px-5 bg-[#FDFDFD] ">
                    <div className="">
                        <button className='w-full flex justify-end mb-5'><img onClick={toggleSideMenu} src="/Images/close.svg" alt="" /></button>
                        <NavLink to="/"            className="p-2 flex hover:bg-[#DFE0E1] rounded-md mt-1 items-center text-xl gap-2 "> <img src="/Images/Job.svg"       alt="/" /> <p              className='font-Jost font-medium' > Latest job                </p> </NavLink>
                        <NavLink to="/upcomming"   className="p-2 flex hover:bg-[#DFE0E1] rounded-md mt-1 items-center text-xl gap-2 "> <img src="/Images/soon.svg"      alt="/" /> <p              className='font-Jost font-medium' > Up-comming Update         </p> </NavLink>
                        <NavLink to="/admission"   className="p-2 flex hover:bg-[#DFE0E1] rounded-md mt-1 items-center text-xl gap-2 "> <img src="/Images/admission.svg" alt="/" /> <p              className='font-Jost font-medium' > Admission                 </p> </NavLink>
                        <NavLink to="/answer_Key"  className="p-2 flex hover:bg-[#DFE0E1] rounded-md mt-1 items-center text-xl gap-2 "> <img src="/Images/key.svg"       alt="/" /> <p              className='font-Jost font-medium' > Answer Key                </p> </NavLink>
                        {accessToken?.length > 20 ? (
                            <NavLink onClick={LogOut} className="p-2 flex hover:bg-[#DFE0E1] rounded-md mt-1 items-center text-xl gap-2 "> <img src="/Images/login.svg" alt="/" /> <p className='font-Jost font-medium' > LogOut </p> </NavLink>
                        ):(
                            <NavLink to="/login" className="p-2 flex hover:bg-[#DFE0E1] rounded-md mt-1 items-center text-xl gap-2 "> <img src="/Images/login.svg" alt="/" /> <p className='font-Jost font-medium' > LogIn </p> </NavLink>
                        )}
                    </div>
                    <Social/>
                </div>

            ): null
        }

    </div>

    {/* Mobile Bottom NavBar */}
    <div className="fixed z-20 bottom-0 py-4 bg-white w-full flex justify-around lg:hidden font-Jost ">

        <NavLink to="/" className="flex flex-col justify-center items-center">
            <img className='' src="/Images/Job.svg" alt="" />
            <span className="text-sm">Latest Job</span>
        </NavLink>

        <NavLink to="/result" className="flex flex-col justify-center items-center">
            <img className='' src="/Images/Result.svg" alt="" />
            <span className="text-sm">Result</span>
        </NavLink>

        <NavLink to="/statejob" className="flex flex-col justify-center items-center">
            <img className='' src="/Images/Syllabus.svg" alt="" />
            <span className="text-sm">State Jobs</span>
        </NavLink>

        <NavLink to="/admitCard" className="flex flex-col justify-center items-center">
            <img className='' src="/Images/AdmitCard.svg" alt="" />
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