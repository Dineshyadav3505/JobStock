import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavbar = () => {
    const link =[
        {label: 'Job Post',          to: '/jobPost',     img:""  },
        {label: 'State Post',        to: '/stateJob',    img:""  },
        {label: 'Result Post',       to: '/resulJob',    img:""  },
        {label: 'AdmitCard Post',    to: '/admitCard',   img:""  },
        {label: 'AnswerKey Post',    to: '/answerKey',   img:""  },
        {label: 'UpComming Post',    to: '/upComming',   img:""  }
  
    ]
  return (
    <div className={`hidden lg:flex flex-col text-white h-full w-[6%]`}>
        {link.map((item,index)=>(
            <NavLink to="/jobPost" className="px-2 py-2 mb-2 flex flex-col items-center rounded hover:bg-zinc-800">
                <img className='h-5' src="Images/ajob.svg" alt="" />
                <p className='text-xs mt-2 text-center'>{item.label}</p>
            </NavLink>
        ))}
    </div>
  )
}

export default SideNavbar