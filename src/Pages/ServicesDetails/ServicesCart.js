import React from "react";
import { ImArrowRight2 } from "react-icons/im";
const ServicesCart = () => {
  return (
    <div className="bg-slate-300 px-3 py-5 shadow-lg rounded-md mb-10">
      <div className="flex bg-orange-500 p-5 rounded-md shadow-2xl justify-between items-center mt-5 text-center">
        <h1 className="text-xl font-bold text-white">Full Car Repair</h1>
        <ImArrowRight2 className="text-2xl text-white font-bold" />
      </div>
      <div className="flex bg-slate-100 p-5 rounded-md shadow-2xl justify-between items-center mt-5 text-center">
        <h1>Engine Repair</h1>
        <ImArrowRight2 className="text-2xl text-orange-500 font-bold" />
      </div>
      <div className="flex bg-slate-100 p-5 rounded-md shadow-2xl justify-between items-center mt-5 text-center">
        <h1>Automatic Services</h1>
        <ImArrowRight2 className="text-2xl text-orange-500 font-bold" />
      </div>
      <div className="flex bg-slate-100 p-5 rounded-md shadow-2xl justify-between items-center mt-5 text-center">
        <h1>Engine Oil Change</h1>
        <ImArrowRight2 className="text-2xl text-orange-500 font-bold" />
      </div>
      <div className="flex bg-slate-100 p-5 rounded-md shadow-2xl justify-between items-center mt-5 text-center">
        <h1>Battery Charge</h1>
        <ImArrowRight2 className="text-2xl text-orange-500 font-bold" />
      </div>
    </div>
  );
};

export default ServicesCart;
