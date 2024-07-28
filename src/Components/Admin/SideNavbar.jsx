import React from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';

const SideNavbar = () => {
    const link =[
        {label: 'Job Post',          to: '/jobPost',         img:"Images/ajob.svg"  },
        {label: 'State Post',        to: '/stateJobPost',    img:"Images/astate.svg"  },
        {label: 'Result Post',       to: '/resulJobPost',        img:"Images/aresult.svg"  },
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
    <div className={`hidden lg:flex flex-col text-white w-[6%]`}>
        {link.map((item,index)=>(
            <NavLink key={index} to={item.to} className="px-2 py-2 mb-2 flex flex-col items-center rounded hover:bg-zinc-800">
                <img className='h-5' src={item.img} alt="" />
                <p className='text-xs mt-2 text-center'>{item.label}</p>
            </NavLink>
        ))}
        <NavLink onClick={logout} to="/" className="px-2 py-2 mb-2 flex flex-col items-center rounded hover:bg-zinc-800">
            <img className='h-5' src="Images/alogout.svg" alt="" />
            <p className='text-xs mt-2 text-center'>LogOut</p>
        </NavLink>

    </div>
  )
}

export default SideNavbar