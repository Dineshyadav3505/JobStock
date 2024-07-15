import React from 'react';
import NavBar from '../../Elements/NavBar';
import { useSelector } from 'react-redux';

const ImageView = () => {
  const postDetails = useSelector((state) => state.jobPostDetails.product);
  const images = postDetails.postImage;

  const navigate = () => {
    window.history.back();
  };
  return (
    <>
      <NavBar />
      <div className=" relative bg-transparent">
        <img onClick={navigate} className=' absolute top-2 left-2' src="/Images/close.svg " alt="" />
        {images && images.map((item, index) => (
          <img
            key={index}
            className="w-full bg-red-300 object-cover"
            src={item}
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default ImageView;