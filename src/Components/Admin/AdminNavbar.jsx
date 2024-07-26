import React from 'react'

const AdminNavbar = () => {
    
  return (
    <div className=' flex py-4 justify-between items-center px-4 relative'>
        <h1 className='font-serif font-black text-xl tracking-tighter text-[#119766]'>Naukri<span className=' font-Jost text-[#f4b27b]'>VACANCY</span></h1>        
        <div className=" flex gap-2">
          <img className='h-5 w-5 rounded-full' src="Images/Admin.avif" alt="Images/admin.svg" />
          <img className='h-5 w-5 rounded-full' src="Images/amenu.svg" alt="Images/admin.svg" />
        </div>
    </div>
  )
}

export default AdminNavbar