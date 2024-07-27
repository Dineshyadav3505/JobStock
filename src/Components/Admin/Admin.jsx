import React from 'react'
import AdminNavbar from './AdminNavbar'
import SideNavbar from './SideNavbar'

const Admin = () => {
  return (
    <>
    <div className="bg-zinc-900 h-screen ">
      <AdminNavbar />
      <div className="flex h-full ">
        
        <div className=" bg-red-300 w-full flex item-center lg:w-[97%] bg-zinc-800">
          <img className='object-cover' src="Images/Icon.svg" alt="" />
        </div>

        <SideNavbar/>
      
      </div>

    </div>

    </>
  )
}

export default Admin