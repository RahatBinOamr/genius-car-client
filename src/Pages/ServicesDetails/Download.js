import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
const Download = () => {
  return (
    <div className="bg-black px-5 py-8 rounded-md mt-5 mb-5 shadow-xl">
      <div className="flex items-center bg-black shadow-xl justify-between">
        <div className="flex items-center">
          <RiPagesLine className="text-3xl me-2 text-white" />
          <div>
            <p className="text-white font-bold text-xl">Our Brochure</p>
            <h1 className="text-gray-400 ">Download</h1>
          </div>
        </div>
        <BsArrowRight className=" text-white w-10 p-2 rounded-md h-10 bg-orange-600 " />
      </div>
      <div className="flex items-center bg-black shadow-xl mt-8 justify-between">
        <div className="flex items-center">
          <RiPagesLine className="text-3xl me-2 text-white" />
          <div>
            <p className="text-white font-bold text-xl">Company Details</p>
            <h1 className="text-gray-400 ">Download</h1>
          </div>
        </div>
        <BsArrowRight className=" text-white w-10 p-2 rounded-md h-10 bg-orange-600 " />
      </div>
    </div>
  );
};

export default Download;
