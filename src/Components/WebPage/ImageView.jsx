import React from 'react'
import NavBar from '../Elements/NavBar'
import { useSelector } from 'react-redux'

const ImageView = () => {
  const postDetails = useSelector((state) => state.jobPostDetails.product);
  const image = postDetails.postImage;
  return (
    <>
    <NavBar/>
    <img className='w-full h-full' src={image} alt="" />
    </>
  )
}

export default ImageView