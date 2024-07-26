import React from 'react'
import AdminNavbar from './AdminNavbar'
import SideNavbar from './SideNavbar'

const Admin = () => {
  return (
    <>
    <div className="bg-zinc-900 h-screen ">
      <AdminNavbar />
      <div className="flex ">
        
        <div className=" bg-red-300 w-[97%] bg-zinc-800 h-96">
        </div>
        <SideNavbar/>
      </div>

    </div>

    </>
  )
}

export default Admin