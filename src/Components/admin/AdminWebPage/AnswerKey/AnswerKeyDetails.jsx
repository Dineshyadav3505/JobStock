import React, { useEffect, useState} from 'react'
import NavBar from '../../AdminElements/NavBar'
import JobDetailsUpperdiv from '../../AdminElements/JobDetailsUpperdiv'
import JobDetailsBottomdiv from '../../AdminElements/JobDetailsBottomdiv'
import { useParams, useLocation } from 'react-router-dom';
import axios from '../../../../utils/Axios';
import { useSelector, useDispatch } from 'react-redux';
import { setAnswerKeyDetails } from '../../../../Store/singleAnswerKeyPost';
import ReactGA from 'react-ga';

const AdminAnswerKeyDetails = () => {

  const data = useSelector((state) => state.answerKeyDetails.product);
  const [Loading , setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch(); 


  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`/answerkey/${id}`);
          dispatch(setAnswerKeyDetails(response.data.data));
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchProducts();
    }, []);


  return (
    <>
    <NavBar/>
    {Loading === true ? 
  (
    <div className="h-screen w-full flex bg-black justify-center items-center">
      <div className="border-[5px] h-12 w-12 rounded-full border-t-[#119766] animate-spin"
      ></div>
    </div>
    
  ) : (
    <div className="relative bg-black ">
      <img className='w-full md:hidden' src="/Images/Banner.svg" alt="" />
      <img className='w-full hidden md:block lg:hidden' src="/Images/Bannermd.svg" alt="" />
      <img className='w-full hidden lg:block' src="/Images/BannerLG.svg" alt="" />
        <div className="px-5 absolute top-56 w-screen md:px-16 ">
            <div className="w-full rounded-lg overflow-hidden ">
                
                <JobDetailsUpperdiv
                    img={data.iconImage}
                    title={data.postName}
                    date={data.beginDate}
                    lastDate={data.lastDate}
                    yyyymmddDate={data.yyyymmddDate} 
                />

                <JobDetailsBottomdiv
                  postImage={data.postImage}
                  postDescription={data.postDescription}
                  applyLink={data.applyLink}
                  totalPost={data.totalPost}
                  date1={data.date1}
                  date2={data.date2}
                  date3={data.date3}
                  date4={data.date4}
                  date5={data.date5}
                  date6={data.date6}
                  date7={data.date7}
                  date8={data.date8}
                  date9={data.date9}
                  date10={data.date10}
                  age1={data.age1}
                  age2={data.age2}
                  age3={data.age3}
                  age4={data.age4}
                  age5={data.age5}
                  age6={data.age6}
                  age7={data.age7}
                  age8={data.age8}
                  age9={data.age9}
                  age10={data.age10}
                  Fee1={data.Fee1}
                  Fee2={data.Fee2}
                  Fee3={data.Fee3}
                  Fee4={data.Fee4}
                  Fee5={data.Fee5}
                  Fee6={data.Fee6}
                  Fee7={data.Fee7}
                  Fee8={data.Fee8}
                  Fee9={data.Fee9}
                  Fee10={data.Fee10}
                  children="Apply Now"
                  vacancyDetails="Block"

                />


                
            </div>

        </div>
    </div>
  )}
    </>
  )
}

export default AdminAnswerKeyDetails;