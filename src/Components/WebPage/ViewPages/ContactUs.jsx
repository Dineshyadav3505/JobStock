import React from 'react';
import NavBar from '../../Elements/NavBar';
import Footer from '../../Elements/Footer';
import Social from '../../Elements/Social';

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="px-5">
        <div className='px-5 mx-auto my-10 py-10 max-w-3xl justify-items-center bg-gray-100 rounded-lg shadow-lg transition-transform transform'>
          <h1 className='text-4xl font-bold mb-6 text-center'>Contact Us</h1>
          
          <h2 className='text-lg font-semibold mb-4 text-center'>
            Wanna connect with us? <br /> You can do so through the below mentioned links.
          </h2>

          <div className="flex px-0 flex-col gap-6 items-center mt-8">
          {/* <div className="flex gap-3 justify-center items-center">
              <img 
                src="Images/call.svg" 
                alt="Phone Icon" 
                className="h-7"
              />
              <p className="font-sans">+91 7027069612</p>
            </div> */}
            <div className="flex gap-3">
              <img 
                src="Images/mail.svg" 
                alt="Email Icon" 
                className="h-7"
              />
              <p className="font-sans">Contactnaukrivacancy@gmail.com</p>
            </div>
          </div>

          <h3 className='text-lg font-sans mt-8 text-center'>Find us on social media</h3>

          <div className="flex justify-center mt-4">
            <Social/>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-blue-600 font-sans font-bold">Thank You!</h3>
            <h3 className="text-blue-600 font-sans">We will get back to you soon...</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;