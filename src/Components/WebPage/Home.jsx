import React from 'react'
import NavBar from '../Elements/NavBar'
import JobCard from '../Elements/JobCard'

const Home = () => {

    const data =[
        {},
        {},
        {},
        {},
        {},
        {},
    ]
  return (
    <>
    <NavBar/>
    <div className="p-5 flex flex-wrap  justify-between pb-24">
        {
            data.map((item, index) => (
                <JobCard 
                    key={index}
                    id={item.id}
                    img="https://imgs.search.brave.com/MLrsy63K6fj92Gwd-_7bbhEcIqZ1xA4QfLgHeApfPRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9JbnN0YWdy/YW0tbG9nby1QTkct/bGFyZ2Utc2l6ZS5w/bmc"
                    title="Union Public Service Commission (UPSC)"
                    date="15th June 2021"
                    lastDate="15th June 2021"
                    saveBtn="block"
                    removeBtn="hidden"
                    applyBtn="/id"
                />
            ))  
        }

    </div>
    </>
  )
}

export default Home