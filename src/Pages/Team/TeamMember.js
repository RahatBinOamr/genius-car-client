import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const TeamMember = ({ team }) => {
  const { name, title, img } = team;
  return (
    <div className=" w-96 bg-base-100 shadow-lg ">
      <figure className=" ">
        <img
          src={img}
          alt="Shoes"
          className="object-cover object-center w-96 mb-[-30px] bg-slate-200 rounded-t-md h-72 "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{name} </h2>
        <p>{title}</p>
        <div className="flex flex-col justify-center pt-3 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <BsFacebook className="text-xl text-blue-900" />
            <BsTwitter className="text-xl text-blue-700" />
            <BsLinkedin className="text-xl text-blue-600" />
            <BsInstagram className="text-xl text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
