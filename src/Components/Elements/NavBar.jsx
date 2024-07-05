import React from 'react'
import { NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    const isActive = (path) => {
      return location.pathname === path;
    };
  
  return (
    <>
    {/* Mobbile Top NavBar */}
    <div className=' flex py-4 justify-between px-4 border-b-[1px]'>
        <div className="flex  justify-between lg:w-[60%]">
            <h1 className='text-xl font-Jost '>NavBar</h1>
            <div className=" text-base hidden font-Jost px-5 lg:flex gap-4 ">
                <NavLink to="/"           className={`${isActive('/')          ? 'font-bold underline' : ''}`}  activeClassName="font-bold" > Latest Job</NavLink>
                <NavLink to="/result"     className={`${isActive('/result')    ? 'font-bold underline' : ''}`}  activeClassName="font-bold" > Result</NavLink>
                <NavLink to="/syllabus"   className={`${isActive('/syllabus')  ? 'font-bold underline' : ''}`}  activeClassName="font-bold" > Syllabus</NavLink>
                <NavLink to="/adminCard"  className={`${isActive('/admitCard') ? 'font-bold underline' : ''}`}  activeClassName="font-bold" > Admit Card</NavLink>
            </div>
        </div>

        <div className=" flex gap-4 justify-end lg:w-44">
            <NavLink to="/" > <img src="/Images/Search.svg" alt="" /> </NavLink>
            <NavLink to="/" className='hidden md:block relative' ><span className=' absolute rounded-full top-0 right-0 h-2 w-2 bg-red-500'></span><img src="/Images/notification.svg" alt="" /> </NavLink>
        </div>
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