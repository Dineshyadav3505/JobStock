import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const social = [
    {img: "/Images/whatsapp.png",   link: "https://whatsapp.com/channel/0029VaalN6gJ3jv5HXQdqs0V" },
    {img: "/Images/facebook.png",   link: "https://www.facebook.com/profile.php?id=100072466668709&mibextid=ZbWKwL" },
    {img: "/Images/telegram.png",   link: "https://t.me/naukrivacancyofficial" },
    {img: "/Images/instagram.png",  link: "https://www.instagram.com/naukrivacancy_com?igsh=MWt0anF5bHY2ZnkwYg==" }
  ]
  const data = [
    {lable:"About us", link:"/aboutus"},
    {lable:"Contact us", link:"/contactus"},
    {lable:"Privacy Policy", link:"/privacypolicy"},
    {lable:"Terms and Conditions", link:"/termsandconditions"},
    {lable:"Help & Support", link:"/helpandsupport"},
  ]
  return (
    <>
    <div className="w-full mb-20 lg:mb-0 px-4 z-10 bg-[#0d8257]">
      <div className="w-full">
        <div className="w-fyll flex gap-6 py-12 lg:gap-14 justify-center">
          {social.map((item, index) =>(
              <a 
                  key={index} 
                  href={item.link} 
                  className="py-2 px-4 rounded-3xl flex justify-center items-center gap-2"
                  target="_blank"
              >
                  <img src={item.img} className='h-8 ' alt={item.name} />
              </a>
          ))}
        </div>
        <div className=" flex flex-wrap gap-3 py-3 justify-center text-zinc-900 underline text-xs mb-6">
          {data.map((item, index) =>(
            <NavLink to={item.link} key={index} >{item.lable}</NavLink>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h5 className='text-xs py-2 text-center'>copyright © 2024, Designed with ❤ by <br /> @NaukriVacancyTeam</h5>
      </div>
    </div>
    </>
  )
}

export default Footer