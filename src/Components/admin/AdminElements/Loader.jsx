import React from 'react'

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        className="border-[5px] h-12 w-12 rounded-full border-t-[#119766] animate-spin"
      ></div>
    </div>
  )
}

export default Loader