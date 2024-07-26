import React, { useState } from 'react'

const AdminNavbar = () => {

  const [menu, setMenu] = useState(false)

  const menuToggle = ()=>{
    setMenu(!menu)
  }
    
  return (
    <>
    <div className=' flex py-4 justify-between items-center px-4 relative'>
        <h1 className='font-serif font-black text-xl tracking-tighter text-[#119766]'>Naukri<span className=' font-Jost text-[#f4b27b]'>VACANCY</span></h1>        
        <div className=" flex gap-6 items-center px-3">
          <img className='h-9 w-9 hidden md:block rounded-full' src="Images/Admin.avif" alt="Images/admin.svg" />
          <img onClick={menuToggle} className='h-6 w-6 rounded-full' src="Images/amenu.svg" alt="Images/admin.svg" />
        </div>
    </div>
    {menu === true ? 
    (
      <div className=" absolute top-0 right-0 w-[70%] md:w-1/2 lg:w-1/3 h-56 bg-zinc-800"></div>
    ) : null}
    </>
  )
}

export default AdminNavbar