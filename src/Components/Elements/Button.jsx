import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = (
    {
        children="Quick Apply",
        className,
        onClick,
        span
    }
) => {
  return (
    <NavLink to={`${onClick}`}  className={`rounded-md py-2 px-4 text-sm bg-[#119766] ${className} `}>
        {children}
        {span && <span className="ml-2 text-xs font-semibold">{span}</span>}
    </NavLink>
  )
}

export default Button