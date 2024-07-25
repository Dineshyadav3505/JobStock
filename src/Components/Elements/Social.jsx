import React from 'react';

const Social = () => {
    const data = [
        { name: "WhatsApp", img: "/Images/whatsapp.png",   link: "https://whatsapp.com/channel/0029VaalN6gJ3jv5HXQdqs0V" },
        { name: "Facebook", img: "/Images/facebook.png",   link: "https://www.facebook.com/profile.php?id=100072466668709&mibextid=ZbWKwL" },
        { name: "Telegram", img: "/Images/telegram.png",    link: "https://t.me/naukrivacancyofficial" },
        { name: "Instagram", img: "/Images/instagram.png", link: "https://www.instagram.com/naukrivacancy_com?igsh=MWt0anF5bHY2ZnkwYg==" }
    ];

    return (
        <div className=" flex flex-col gap-2 mb-10">
            {data.map((item, index) => (
                <a 
                    key={index} 
                    href={item.link} 
                    className="py-2 px-4 bg-[#EEEEEE] rounded-3xl flex items-center gap-2"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={item.img} className='h-6' alt={item.name} />
                    <h4 className='text-sm font-Jost'>{item.name}</h4>
                </a>
            ))}
        </div>
    );
};

export default Social;