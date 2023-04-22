import React from "react";

const Facility = ({ data }) => {
  return (
    <div>
      <div className="duration-300  transform rounded-lg bg-slate-200 border-t-4 border-orange-400 hover:-translate-y-2">
        <div className="h-full p-5 border  rounded-r shadow-sm">
          <h6 className="mb-2 font-semibold leading-5">{data.name}</h6>
          <p className="text-sm text-gray-900">{data.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Facility;
