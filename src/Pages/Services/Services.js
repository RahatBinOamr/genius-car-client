import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServicePagination from "./ServicePagination";

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  useEffect(() => {
    fetch(" https://genius-car-server-omega-nine.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = services.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className=" mx-auto text-center mt-10 ">
        <ServicePagination
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          totalPosts={services.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Services;
