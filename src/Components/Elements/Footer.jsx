import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const data = [
    {lable:"About us", link:"aboutus"},
    {lable:"Contact us", link:"contactus"},
    {lable:"Privacy Policy", link:"privacypolicy"},
    {lable:"Terms and Conditions", link:"termsandconditions"},
    {lable:"Careers", link:"careers"},
    {lable:"Help & Support", link:"helpandsupport"},
  ]
  return (
    <>
    <div className="w-full lg:flex px-10 py-10 bg-[#0d8257]">
      <div className="lg:w-1/2 lg:pr-16 flex flex-col gap-10 text-sm  text-zinc-400">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nihil obcaecati explicabo necessitatibus libero deleniti, minus dolorum. Fuga cumque reprehenderit error illum, corrupti rem eveniet. Necessitatibus aspernatur modi recusandae. Veritatis.
          Dolore velit at illo cupiditate magni neque nostrum iste temporibus dicta quos sint error quae sit in vitae, iure obcaecati deleniti rem unde quo veritatis amet reprehenderit 
        </p>
        <p className='font-serif'>© 2024 NaukriVacancy.com Pty Ltd .</p>
      </div>
      <div className="lg:w-1/2 h-56 mt-10 lg:mt-0 text-zinc-300">
      <div className="flex flex-wrap gap-10">
          {data.map((item, index) => (
            <NavLink to={item.link} key={index} className="text-sm hover:text-white text-zinc-400">
              {item.lable}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer