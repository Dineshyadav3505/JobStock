import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    const [notification, setNotifications] = useState(false)
    const [sideMenu , setSideMenu] = useState(false)

    const toggleNotification = () => {
      setNotifications(!notification);
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
            <img className='h-10' src="Images/Logo.jpeg" alt="" />
            {/* <h1 className='font font-mono font-black text-xl tracking-tighter '>NAUKRI VACANCY</h1> */}
            <div className=" text-base hidden font-Jost px-5 lg:flex gap-4 items-end ">
                <NavLink to="/"           className={`${isActive('/')          ? 'font-bold underline' : ''}`}  activeClassName="font-bold" > Latest Job</NavLink>
                <NavLink to="/result"     className={`${isActive('/result')    ? 'font-bold underline' : ''}`}  activeClassName="font-bold" > Result</NavLink>
                <NavLink to="/syllabus"   className={`${isActive('/syllabus')  ? 'font-bold underline' : ''}`}  activeClassName="font-bold" > Syllabus</NavLink>
                <NavLink to="/adminCard"  className={`${isActive('/adminCard') ? 'font-bold underline' : ''}`}  activeClassName="font-bold" > Admit Card</NavLink>
            </div>
        </div>

        <div className=" flex gap-4 justify-end lg:w-44 ">
            <button onClick={toggleNotification} className='hidden md:block relative' ><span className=' absolute rounded-full top-0 right-0 h-2 w-2 bg-red-500'></span><img src="/Images/notification.svg" alt="" /> </button>
            <button onClick={toggleSideMenu} > <img src="/Images/Search.svg" alt="" /> </button>

        </div>

        {notification === true ? 
            (
                <div className="h-screen  w-96 absolute z-50 top-10 right-0 rounded-xl border-[15px] "></div>
            ): null
        }

        {sideMenu == true ? 
            (
                <div className=" absolute right-0 z-50 h-screen top-0 w-[70%] lg:w-1/3 py-5 px-5 bg-[rgba(255,255,255,.9)] ">
                    <button className='w-full flex justify-end'><img onClick={toggleSideMenu} src="/Images/close.svg" alt="" /></button>
                    <h1 className='text-3xl font-bitter capitalize underline mb-3' >hello!</h1>
                    
                    <div className="p-2 flex items-center text-2xl hover:text-4xl hover:underline duration-300"> <NavLink to="/"                         className='font-bitter font-medium italic' > Home                      </NavLink> </div>
                    <div className="p-2 flex items-center text-2xl hover:text-4xl hover:underline duration-300"> <NavLink to="/up-commingUpdate"                         className='font-bitter font-medium italic' > Up-comming Update         </NavLink> </div>
                    <div className="p-2 flex items-center text-2xl hover:text-4xl hover:underline duration-300"> <NavLink to="/stateJob"                         className='font-bitter font-medium italic' > State Job                 </NavLink> </div>
                    <div className="p-2 flex items-center text-2xl hover:text-4xl hover:underline duration-300"> <NavLink to="/admission"                className='font-bitter font-medium italic' > Admission                 </NavLink> </div>
                    <div className="p-2 flex items-center text-2xl hover:text-4xl hover:underline duration-300"> <NavLink to="/answer_Key"               className='font-bitter font-medium italic' > Answer Key                </NavLink> </div>
                    <div className="p-2 flex items-center text-2xl hover:text-4xl hover:underline duration-300"> <NavLink to="/important"                className='font-bitter font-medium italic' > Important                 </NavLink> </div>
                    <div className="p-2 flex items-center text-2xl hover:text-4xl hover:underline duration-300"> <NavLink to="/certificate_Verification" className='font-bitter font-medium italic' > Certificate Verification  </NavLink> </div>
                    <div className="p-2 flex items-center text-2xl hover:text-4xl hover:underline duration-300"> <NavLink to="/saved_Post"               className='font-bitter font-medium italic' > Saved Post                </NavLink> </div>
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

        <NavLink to="/syllabus" className="flex flex-col justify-center items-center">
            <img className='' src="/Images/Syllabus.svg" alt="" />
            <span className="text-sm">Syllabus</span>
        </NavLink>

        <NavLink to="/adminCard" className="flex flex-col justify-center items-center">
            <img className='' src="/Images/AdmitCard.svg" alt="" />
            <span className="text-sm">Admit Card</span>
        </NavLink>
    </div>
    </>
  )
}

export default NavBar