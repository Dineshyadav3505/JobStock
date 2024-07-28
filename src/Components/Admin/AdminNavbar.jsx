import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';

const AdminNavbar = () => {

  const [menu, setMenu] = useState(false)
  const accessToken = Cookies.get('cb_chec');
  const menuToggle = ()=>{
    setMenu(!menu)
  }
  const link =[
    {label: 'Job Post',          to: '/jobPost',         img:"Images/ajob.svg"  },
    {label: 'State Post',        to: '/stateJobPost',    img:"Images/astate.svg"  },
    {label: 'Result Post',       to: '/resulJobPost',    img:"Images/aresult.svg"  },
    {label: 'AdmitCard Post',    to: '/admitCardPost',   img:"Images/aadmit.svg"  },
    {label: 'AnswerKey Post',    to: '/answerKeyPost',   img:"Images/aanswer.svg"  },
    {label: 'Admission Post',    to: '/admissionPost',   img:"Images/aadmission.svg"  },
    {label: 'UpComming Post',    to: '/upCommingPost',   img:"Images/aupcomming.svg"  },
    {label: 'Notification Post',    to: '/notificationPost',   img:"Images/anotification.svg"  },
  ]

  const logout = ()=>{
      Cookies.remove('cb_chec');
  }
      
  return (
    <>
    <div className=' flex py-4 justify-between items-center px-4 relative'>
        <NavLink to="/admin" > <h1 className='font-serif font-black text-xl tracking-tighter text-[#119766]'>Naukri<span className=' font-Jost text-[#f4b27b]'>VACANCY</span></h1> </NavLink>       
        <div className=" flex gap-6 items-center lg:px-3">
        <NavLink to="/admin" > <img className='h-9 w-9 object-cover hidden md:block  rounded-full' src="Images/Admin.avif" alt="Images/admin.svg" /> </NavLink>
          <img onClick={menuToggle} className='h-6 w-6 rounded-full' src="Images/amenu.svg" alt="Images/amenu.svg" />
        </div>
    </div>
    {menu == true ? 
            (
                <div className=" absolute right-0 z-50 bg-zinc-800 drop-shadow-md rounded-l-2xl top-0 w-[65%] md:w-[40%] lg:w-1/3 py-5 px-5 bg-[#FDFDFD] ">
                    <button className='w-full flex justify-end mb-5'><img onClick={menuToggle} src="/Images/aclose.svg" alt="" /></button>
                    {link.map((item,index)=>(
                        <NavLink key={index} to={item.to} className="px-2 py-2 mb-2 flex items-end gap-3 rounded hover:bg-zinc-600">
                            <img className='h-5' src={item.img} alt="" />
                            <p className='text-xs mt-2 text-white text-center'> {item.label}</p>
                        </NavLink>
                    ))}
                    <NavLink onClick={logout} to="/" className="px-2 py-2 mb-2 flex gap-3 items-end  rounded hover:bg-zinc-600">
                        <img className='h-5' src="Images/alogout.svg" alt="" />
                        <p className='text-xs mt-2 text-white text-center'>LogOut</p>
                    </NavLink>
                </div>

            ): null
        }
    </>
  )
}

export default AdminNavbar