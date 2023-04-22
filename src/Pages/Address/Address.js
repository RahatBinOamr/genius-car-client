import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import { GoLocation } from "react-icons/go";
const Address = () => {
  return (
    <div className="grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black rounded-md p-20 ">
      <div className="flex items-center">
        <FcCalendar className="text-3xl me-2" />
        <div>
          <p className="text-white">We are open monday-friday</p>
          <h1 className="text-white font-bold text-xl">7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="flex items-center">
        <BiPhoneCall className="text-3xl me-2 text-white" />
        <div>
          <p className="text-white">Have a question?</p>
          <h1 className="text-white font-bold text-xl">+2546 251 2658</h1>
        </div>
      </div>
      <div className="flex items-center">
        <GoLocation className="text-3xl me-2 text-white" />
        <div>
          <p className="text-white">Need a repair? our address</p>
          <h1 className="text-white font-bold text-xl">
            Liza Street, New York
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Address;
