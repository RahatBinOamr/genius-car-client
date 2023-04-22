import React from "react";
import img from "../../assets/logo.svg";
const Special = () => {
  return (
    <div className="card-body items-center shadow-2xl rounded-lg text-center bg-black px-7 py-10">
      <img src={img} alt="" />
      <p className="mt-8 text-white font-semibold">
        Need Help? We Are Here <br />
        To Help You
      </p>
      <div className="bg-white shadow-2xl p-9 rounded-xl">
        <p>
          {" "}
          <span className="text-orange-500 text-xl font-bold">
            Car Doctor
          </span>{" "}
          <b>Special</b> <br />
          <span className="text-gray-400 text-xs">Save up to</span>{" "}
          <span className="text-orange-500 font-semibold">60% off</span>
        </p>
      </div>
      <p className="bg-orange-600 p-3 mt-[-30px] shadow-2xl rounded-lg text-white font-bold">
        Get A Quote
      </p>
    </div>
  );
};

export default Special;
