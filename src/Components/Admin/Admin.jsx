import React from 'react'
import AdminNavbar from './AdminNavbar'
import SideNavbar from './SideNavbar'

const Admin = () => {
  return (
    <>
    <div className="bg-zinc-900 h-screen overflow-hidden">
      <AdminNavbar />
      <div className="flex h-screen ">
        <div className=" bg-red-300 w-full object-cover flex justify-center item-center lg:w-[97%] bg-zinc-800 relative">
          <img className='' src="Images/Icon.svg" alt="" />
          <div className="w-full h-full bg-zinc-900 opacity-75 absolute"></div>
        </div> 

        <SideNavbar/>
      
      </div>

    </div>

    </>
  )
}

export default Admin