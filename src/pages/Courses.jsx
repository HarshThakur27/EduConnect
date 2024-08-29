// import React from "react";
// // import Navbar from  "./components/Navbar";
// import Cards from "./Cards"
// import Filter from "./Filter"
// import { apiUrl, filterData  } from "./data";
// import { useState,useEffect } from "react";
// import Spinner from "./components/Spinner";
// import {toast} from "react-toastify";


// const App = () => { 
//   const [courses, setCourses] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState(filterData[0].title);

//   async function fetchData() {
//     setLoading(true);
//     try{
//       let response = await fetch(apiUrl);
//       let output = await response.json();
//       ///output -> 
//       setCourses(output.data);
//     }
//     catch(error) {
//         toast.error("Network me koi dikkat hai");
//     }
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])
  

//   return (
//     <div className="min-h-screen flex flex-col bg-bgDark2">
//       <div>
//         {/* <Navbar/> */}
//       </div>
//       <div className="bg-bgDark2">
//         <div>
//           <Filter 
//           filterData={filterData}
//             category={category}
//             setCategory={setCategory}
//           />
//         </div>
//         <div className="w-11/12 max-w-[1200px] 
//         mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
//         {
//             loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
//           }
//         </div>
//       </div>


//     </div>
//   );
//         };

// export default App;



import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Filter from "./Filter";
import Spinner from "./Spinner"; // Adjust the import based on your folder structure
import { apiUrl, filterData } from "../data";
import { toast } from "react-toastify";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network issue occurred");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div className="bg-bgDark2">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
        </div>
      </div>
    </div>
  );
};

export default Courses;
