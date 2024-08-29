// import React, { useEffect } from 'react'

// import { Link, matchPath } from 'react-router-dom'
// import {NavbarLinks} from "../../data/navbar-links"
// import { useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import {AiOutlineShoppingCart} from "react-icons/ai"
// import ProfileDropDown from '../core/Auth/ProfileDropDown'

// import { useState } from 'react'
// import {IoIosArrowDropdownCircle} from "react-icons/io"


// const Navbar = () => {
//     console.log("Printing base url: ",process.env.REACT_APP_BASE_URL);
//     const {token} = useSelector( (state) => state.auth );
//     const {user} = useSelector( (state) => state.profile );
//     const {totalItems} = useSelector( (state) => state.cart )
//     const location = useLocation();

//     const [ssubLinks, setSsubLinks]  = useState([]);


//     const matchRoute = (route) => {
//         return matchPath({path:route}, location.pathname);
//     }

//   return (
//     <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
//       <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
//         {/* Image */}
//       <Link to="/">
//         <p className='w-[160] h-[42] text-3xl text-white font-bold '>EduConnect</p>
//       </Link>

//       {/* Nav Links */}
//       <nav>
//         <ul className='flex gap-x-6 text-richblack-25'>
//         {
//             NavbarLinks.map( (link, index) => (
//                  <li key={index}>
//                     {
//                         link.title === "Catalog" ? (
//                             <div className='relative flex items-center gap-2 group'>
//                                 <p>{link.title}</p>
//                                 <IoIosArrowDropdownCircle/>

//                                 <div className='invisible absolute left-[50%]
//                                     translate-x-[-50%] translate-y-[80%]
//                                  top-[50%]
//                                 flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
//                                 opacity-0 transition-all duration-200 group-hover:visible
//                                 group-hover:opacity-100 lg:w-[300px]'>

//                                 <div className='absolute left-[50%] top-0
//                                 translate-x-[80%]
//                                 translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
//                                 </div>

                               

//                                 </div>


//                             </div>

//                         ) : (
//                             <Link to={link?.path}>
//                                 <p className={`${ matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
//                                     {link.title}
//                                 </p>
                                
//                             </Link>
//                         )
//                     }
//                 </li>
//              ) )
//         }

//         </ul>
//       </nav>


//         {/* Login/SignUp/Dashboard */}
//         <div className='flex gap-x-4 items-center'>

//             {
//                 user && user?.accountType != "Instructor" && (
//                     <Link to="/dashboard/cart" className='relative'>
//                         <AiOutlineShoppingCart />
//                         {
//                             totalItems > 0 && (
//                                 <span>
//                                     {totalItems}
//                                 </span>
//                             )
//                         }
//                     </Link>
//                 )
//             }
//             {
//                 token === null && (
//                     <Link to="/login">
//                         <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
//                             Log in
//                         </button>
//                     </Link>
//                 )
//             }
//             {
//                 token === null && (
//                     <Link to="/signup">
//                         <button  className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
//                             Sign Up
//                         </button>
//                     </Link>
//                 )
//             }
//             {
//                 token !== null && <ProfileDropDown />
//             }
            
//         </div>


//       </div>
//     </div>
//   )
// }

// export default Navbar



import React, { useEffect, useState } from 'react';
import { Link, matchPath } from 'react-router-dom';
import { NavbarLinks } from '../../data/navbar-links';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        {/* Logo */}
        <Link to='/'>
          <p className='w-[160] h-[42] text-3xl text-white font-bold'>EduConnect</p>
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className='flex gap-x-6 text-richblack-25'>
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path}>
                  <p className={`${matchRoute(link?.path) ? 'text-yellow-25' : 'text-richblack-25'}`}>
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/SignUp/Dashboard */}
        <div className='flex gap-x-4 items-center'>
          {user && user?.accountType !== 'Instructor' && (
            <Link to='/dashboard/cart' className='relative'>
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <>
              <Link to='/login'>
                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                  Log in
                </button>
              </Link>
              <Link to='/signup'>
                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                  Sign Up
                </button>
              </Link>
            </>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
