import React from 'react';
import NavBar from '../../Elements/NavBar';
import Footer from '../../Elements/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <div className="px-5">
        <div className='px-5 mx-auto my-10 py-10 max-w-3xl justify-items-center bg-gray-100 rounded-lg shadow-lg transition-transform transform'>
          <h1 className='text-4xl font-bold mb-6 text-center'>Privacy Policy for Naukrivacancy</h1>
          
          <p className='mb-4'>
            At Naukrivacancy, accessible from Naukrivacancy.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Naukrivacancy and how we use it.
          </p>
          
          <p className='mb-4'>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2 className='text-3xl font-semibold mt-6 mb-3'>Log Files</h2>
          <p className='mb-4'>
            Naukrivacancy follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking user's movement on the website, and gathering demographic information.
          </p>

          <h2 className='text-3xl font-semibold mt-6 mb-3'>Google DoubleClick DART Cookie</h2>
          <p className='mb-4'>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – 
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="nofollow noopener" className='text-blue-500 underline'> https://policies.google.com/technologies/ads</a>
          </p>

          <h2 className='text-3xl font-semibold mt-6 mb-3'>Privacy Policies</h2>
          <p className='mb-4'>
            You may consult this list to find the Privacy Policy for each of the advertising partners of Naukrivacancy.
          </p>
          <p className='mb-4'>
            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Naukrivacancy, which are sent directly to user's browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p className='mb-4'>
            Note that Naukrivacancy has no access to or control over these cookies that are used by third-party advertisers.
          </p>

          <h2 className='text-3xl font-semibold mt-6 mb-3'>Third Party Privacy Policies</h2>
          <p className='mb-4'>
            Naukrivacancy's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
          <p className='mb-4'>
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browser's respective websites.
          </p>

          <h2 className='text-3xl font-semibold mt-6 mb-3'>Children's Information</h2>
          <p className='mb-4'>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </p>
          <p className='mb-4'>
            Naukrivacancy does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>

          <h2 className='text-3xl font-semibold mt-6 mb-3'>Online Privacy Policy Only</h2>
          <p className='mb-4'>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Naukrivacancy. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>

          <h2 className='text-3xl font-semibold mt-6 mb-3'>Consent</h2>
          <p className='mb-4'>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>
              
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;