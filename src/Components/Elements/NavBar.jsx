import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    {/* Mobbile Top NavBar */}
    <div className=' flex py-4 justify-between px-4 border-b-[1px]'>
        <h1 className='text-xl'>NavBar</h1>
        <div className="">
            <img src="/Images/Search.svg" alt="" />
        </div>
    </div>

    {/* Mobile Bottom NavBar */}
    <div className=" absolute bottom-0 py-4 w-full flex justify-around  ">

        <NavLink className="flex flex-col justify-center items-center">
            <img className='' src="/Images/Job.svg" alt="" />
            <span className="text-sm">Latest Job</span>
        </NavLink>

        <NavLink className="flex flex-col justify-center items-center">
            <img className='' src="/Images/Result.svg" alt="" />
            <span className="text-sm">Result</span>
        </NavLink>

        <NavLink className="flex flex-col justify-center items-center">
            <img className='' src="/Images/Syllabus.svg" alt="" />
            <span className="text-sm">Syllabus</span>
        </NavLink>

        <NavLink className="flex flex-col justify-center items-center">
            <img className='' src="/Images/AdmitCard.svg" alt="" />
            <span className="text-sm">Admit Card</span>
        </NavLink>
    </div>
    </>
  )
}

export default NavBar