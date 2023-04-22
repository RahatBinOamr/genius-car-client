import React from "react";
import Facility from "./Facility";

const Facilitys = ({ service }) => {
  console.log(service);

  return (
    <div className="grid gap-8 mt-10 mb-10 row-gap-5 md:row-gap-8 lg:grid-cols-2 sm:grid-cols-1">
      {service?.facility?.map((data, i) => (
        <Facility data={data} key={i} />
      ))}
    </div>
  );
};

export default Facilitys;
