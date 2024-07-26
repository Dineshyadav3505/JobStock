import React from 'react'
import AdminNavbar from './AdminNavbar'
import SideNavbar from './SideNavbar'

const Admin = () => {
  return (
    <>
    <div className="bg-zinc-900 h-screen ">
      <AdminNavbar />
      <div className="flex ">
        <SideNavbar/>
        <div className=" bg-red-300">
          Admin Content Here...
        </div>
      </div>

    </div>

    </>
  )
}

export default Admin