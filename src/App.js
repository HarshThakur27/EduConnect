// import "./App.css";
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






import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses"; // Import the Courses component
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error";
import Settings from "./components/core/Dashboard/Settings";
import { useDispatch, useSelector } from "react-redux";

import { ACCOUNT_TYPE } from "./utils/constants";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.profile);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} /> {/* Add this line for Courses */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
