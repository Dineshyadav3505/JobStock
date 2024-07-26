import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavbar = () => {
    const link =[
        {label: 'Job Post',          to: '/jobPost',     img:"Images/ajob.svg"  },
        {label: 'State Post',        to: '/stateJob',    img:"Images/astate.svg"  },
        {label: 'Result Post',       to: '/resulJob',    img:"Images/aresult.svg"  },
        {label: 'AdmitCard Post',    to: '/admitCard',   img:"Images/aadmit.svg"  },
        {label: 'AnswerKey Post',    to: '/answerKey',   img:"Images/aanswer.svg"  },
        {label: 'UpComming Post',    to: '/upComming',   img:"Images/aupcomming.svg"  }
  
    ]
  return (
    <div className={`hidden lg:flex flex-col text-white h-full w-[6%]`}>
        {link.map((item,index)=>(
            <NavLink to={item.to} className="px-2 py-2 mb-2 flex flex-col items-center rounded hover:bg-zinc-800">
                <img className='h-5' src={item.img} alt="" />
                <p className='text-xs mt-2 text-center'>{item.label}</p>
            </NavLink>
        ))}
    </div>
  )
}

export default SideNavbar