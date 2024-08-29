import React from "react";

const Card1 = (props) => {
  const { review } = props;

  return (
    <div className="flex flex-col items-center pt-1">
      {/* <h1 className="text-4xl font-extrabold text-white mb-8">Our Testimonials</h1> */}

      <div className="w-[600px] bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center">
        <img
          className="rounded-full w-[160px] h-[160px] mb-6"
          src={review.image}
          alt={review.name}
        />
        <p className="text-2xl font-bold text-gray-900">{review.name}</p>
        <p className="text-lg font-semibold text-gray-600">{review.job}</p>
        <p className="mt-4 text-gray-700 font-medium">{review.text}</p>
      </div>
    </div>
  );
};

export default Card1;