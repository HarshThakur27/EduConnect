import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'
import { useEffect } from 'react'

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from "../components/core/HomePage/ExploreMore"
// import reviews from "../Data1";
import Testimonal from './Testimonal'
const Home = () => {
    // useEffect(() => {
    //     const script1 = document.createElement("script");
    //     script1.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    //     script1.async = true;
    //     document.body.appendChild(script1);

    //     const script2 = document.createElement("script");
    //     script2.src = "https://mediafiles.botpress.cloud/d7784fab-f8e2-4c14-ae8f-1050bb16f99e/webchat/v2.1/config.js";
    //     script2.async = true;
    //     document.body.appendChild(script2);

    //     return () => {
    //         document.body.removeChild(script1);
    //         document.body.removeChild(script2);
    //     };
    // }, []);
  return (
    <div>
      {/*Section1  */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between'>

        <Link to={"/signup"}>
            <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become our member</p>
                    <FaArrowRight />
                </div>
            </div>

        </Link>

        <div className='text-center text-3xl font-semibold mt-7'>
        Unlock Professional Advancement with Expert Coding Skills
            {/* <HighlightText text={"Coding Skills"} /> */}
        </div>

        <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}> 
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
                Book a Demo
            </CTAButton>
        </div>

        <div className='mx-3 my-12 shadow-blue-200'>
            <video
            muted
            loop
            autoPlay
            >
            <source  src={Banner} type="video/mp4" />
            </video>
        </div>

        {/* Code Section 1 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-blue-50"}
            />
             
        </div>

                {/* Code Section 2 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Empower Your 
                        <HighlightText text={"Coding Journey"}/>
                        
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>
        <ExploreMore />
           
      </div>

      {/*Section 2  */}
      <div className='bg-pure-greys-5 text-richblack-700 '>
            
            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                <div className='flex flex-row gap-5 mb-10 mt-[195px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"} />
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                    <div className='text-[16px]'>
                    The modern EduConnect is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </CTAButton>
                    </div>

                </div>
                
                

                <TimelineSection />

                <LearningLanguageSection />

            </div>

            

      </div>

      {/*Section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

            <InstructorSection />

            
      </div>
{/*       <div className="container mx-auto py-8">
          <Testimonal reviews={reviews} />
        </div> */}

      {/*Footer */}
      <Footer />

    </div>
  )
}

export default Home

//  import "./App.css";
// import {Route, Routes, useNavigate } from "react-router-dom";
// import Home from "./pages/Home"
// import Navbar from "./components/common/Navbar"
// import OpenRoute from "./components/core/Auth/OpenRoute"

// import Login from "./pages/Login"
// import Signup from "./pages/Signup"
// import ForgotPassword from "./pages/ForgotPassword";
// import UpdatePassword from "./pages/UpdatePassword";
// import VerifyEmail from "./pages/VerifyEmail";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import MyProfile from "./components/core/Dashboard/MyProfile";
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/core/Auth/PrivateRoute";
// import Error from "./pages/Error"
// import Settings from "./components/core/Dashboard/Settings";
// import { useDispatch, useSelector } from "react-redux";

// import { ACCOUNT_TYPE } from "./utils/constants";

// function App() {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const { user } = useSelector((state) => state.profile)


//   return (
//    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route
//           path="signup"
//           element={
//             <OpenRoute>
//               <Signup />
//             </OpenRoute>
//           }
//         />
//     <Route
//           path="login"
//           element={
//             <OpenRoute>
//               <Login />
//             </OpenRoute>
//           }
//         />

//     <Route
//           path="forgot-password"
//           element={
//             <OpenRoute>
//               <ForgotPassword />
//             </OpenRoute>
//           }
//         />  

//       <Route
//           path="verify-email"
//           element={
//             <OpenRoute>
//               <VerifyEmail />
//             </OpenRoute>
//           }
//         />  

//     <Route
//           path="update-password/:id"
//           element={
//             <OpenRoute>
//               <UpdatePassword />
//             </OpenRoute>
//           }
//         />  

//     <Route
//           path="about"
//           element={
//             <OpenRoute>
//               <About />
//             </OpenRoute>
//           }
//         />
//     <Route path="/contact" element={<Contact />} />

//     <Route 
//       element={
//         <PrivateRoute>
//           <Dashboard />
//         </PrivateRoute>
//       }
//     >
//       <Route path="dashboard/my-profile" element={<MyProfile />} />
//       <Route path="dashboard/Settings" element={<Settings />} />
      
//     </Route>

    

//     <Route path="*" element={<Error />} />


//     </Routes>

//    </div>
//   );
// }

// export default App;




