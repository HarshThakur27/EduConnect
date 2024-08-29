import React, { useState } from "react";
import Card1 from './Card1';

const Testimonal = (props) => {
  const { reviews } = props;
  const [index, setIndex] = useState(0);

  function left() {
    setIndex(index - 1 < 0 ? reviews.length - 1 : index - 1);
  }

  function right() {
    setIndex(index + 1 >= reviews.length ? 0 : index + 1);
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center py-8">
      <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
      <div className="w-11/12 max-w-2xl bg-white shadow-lg rounded-lg ">
        <Card1 review={reviews[index]} />
      </div>
      
      <div className="flex justify-center items-center mt-4  space-x-8">
        <button 
          onClick={left} 
          className="text-2xl text-white bg-violet-500 hover:bg-violet-600 font-bold rounded-full w-12 h-12 flex items-center justify-center transition duration-300"
        >
          &lt;
        </button>
        
        <button 
          onClick={right} 
          className="text-2xl text-white bg-violet-500 hover:bg-violet-600 font-bold rounded-full w-12 h-12 flex items-center justify-center transition duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonal;

