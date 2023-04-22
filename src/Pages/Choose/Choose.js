import React from "react";
import img1 from "../../assets/icons/group.svg";
import img2 from "../../assets/icons/Wrench.svg";
import img3 from "../../assets/icons/timly.png";
import img4 from "../../assets/icons/person.svg";
import img5 from "../../assets/icons/check.svg";
import img6 from "../../assets/icons/deliveryt.svg";

const Choose = () => {
  return (
    <>
      <div className="text-center mb-4 mt-14">
        <p className="text-2xl font-bold text-orange-600">Core Features</p>
        <h2 className="text-5xl font-semibold">Why Choose Us</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour,
          <br /> or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid gap-2 mb-10 mt-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <div className=" pb-0 card-body items-center text-center rounded-lg h-40 w-42 shadow-lg">
          <img src={img1} alt="" className="" />
          <h1 className="text-xl font-semibold ">Expert Team</h1>
        </div>
        <div className=" card-body bg-orange-600 rounded-lg h-40 items-center text-center w-42 shadow-2xl">
          <img
            src={img3}
            alt=""
            className="w-24 mt-[-30px] rounded-full bg-white "
          />
          <h1 className="text-xl text-white font-semibold">Timely Delivery</h1>
        </div>
        <div className=" card-body items-center text-center rounded-lg h-40 w-42 shadow-lg">
          <img src={img2} alt="" />
          <h1 className="text-xl font-semibold">Best Equipment</h1>
        </div>
        <div className=" card-body items-center text-center rounded-lg h-40 w-42 shadow-lg">
          <img src={img4} alt="" />
          <h1 className="text-xl font-semibold">24/7 Support</h1>
        </div>
        <div className=" card-body items-center text-center rounded-lg h-40 w-42 shadow-lg">
          <img src={img5} alt="" />
          <h1 className="text-xl font-semibold">100% Guranty</h1>
        </div>
        <div className=" card-body items-center text-center rounded-lg h-40 w-42 shadow-lg">
          <img src={img6} alt="" />
          <h1 className="text-xl font-semibold">Timely Delivery</h1>
        </div>
      </div>
    </>
  );
};

export default Choose;
