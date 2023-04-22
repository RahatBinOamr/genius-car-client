import React, { useEffect, useState } from "react";

import Facilitys from "./Facilitys";
import ServicesCart from "./ServicesCart";
import Download from "./Download";
import Special from "./Special";
import { Link, useParams } from "react-router-dom";
const ServiceDetailsCollection = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  console.log(id, service);
  useEffect(() => {
    fetch(` https://genius-car-server-omega-nine.vercel.app/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);
  return (
    <div className="grid grid-cols-3 gap-4 mt-10 ">
      <div class=" col-span-2 ...">
        <img src={service.img} alt="" className=" w-full h-1/4 rounded-xl  " />
        <h1 className="text-xl font-bold mt-10 mb-10 "> {service.title}</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text
        </p>
        <Facilitys service={service} />
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text
        </p>
        <h1 className="text-xl font-bold mt-10 mb-10">
          3 Simple Steps to Process
        </h1>
        <p className="mt-10 mb-10">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text
        </p>

        <div className="grid gap-8 mt-10 mb-10 row-gap-5 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-1">
          <div className="card-body w-52 bg-slate-100 shadow-lg items-center text-center">
            <p className="text-2xl font-bold text-white bg-orange-500 h-10 w-10 text-center item-center rounded-full">
              1
            </p>
            <h1 className="text-xl font-semibold m-3">Step One</h1>
            <p> It uses a dictionary of over 200 . </p>
          </div>
          <div className="card-body w-52 bg-slate-100 shadow-lg items-center text-center">
            <p className="text-2xl font-bold text-white bg-orange-500 h-10 w-10 text-center item-center rounded-full">
              2
            </p>
            <h1 className="text-xl font-semibold m-3">Step Two</h1>
            <p> It uses a dictionary of over 200 . </p>
          </div>
          <div className="card-body w-52 bg-slate-100 shadow-lg items-center text-center">
            <p className="text-2xl font-bold text-white bg-orange-500 h-10 w-10 text-center item-center rounded-full">
              3
            </p>
            <h1 className="text-xl font-semibold m-3">Step Three</h1>
            <p> It uses a dictionary of over 200 . </p>
          </div>
        </div>
      </div>
      <div class="...">
        <ServicesCart />
        <Download />
        <Special />
        <h1 className="mt-10 mb-10 text-3xl text-black font-bold">
          Price ${service.price}
        </h1>
        <Link to={`/checkout/${service._id}`}>
          <button className="w-full text-white font-semibold bg-orange-600 p-3 text-center rounded-xl shadow-2xl">
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailsCollection;
