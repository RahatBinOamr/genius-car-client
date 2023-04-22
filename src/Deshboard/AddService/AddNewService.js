import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddNewService = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [service_id, setService_id] = useState("");
  const [description, setDescription] = useState("");
  const [facilityName1, setFacilityName1] = useState("");
  const [facilityName2, setFacilityName2] = useState("");
  const [facilityName3, setFacilityName3] = useState("");
  const [facilityName4, setFacilityName4] = useState("");
  const [facilitydetails1, setFacilityDetails1] = useState("");
  const [facilitydetails2, setFacilityDetails2] = useState("");
  const [facilitydetails3, setFacilityDetails3] = useState("");
  const [facilitydetails4, setFacilityDetails4] = useState("");
  const navigate = useNavigate();
  const handelAddService = (e) => {
    e.preventDefault();
    const service = {
      title,
      img,
      description,
      price,
      service_id,
      facility: [
        { name: facilityName1, details: facilitydetails1 },
        { name: facilityName2, details: facilitydetails2 },
        { name: facilityName3, details: facilitydetails3 },
        { name: facilityName4, details: facilitydetails4 },
      ],
    };

    const resetService = () => {
      setTitle("");
      setImg("");
      setPrice("");
      setDescription("");
      setService_id("");
      setFacilityDetails1("");
      setFacilityDetails2("");
      setFacilityDetails3("");
      setFacilityDetails4("");
      setFacilityName1("");
      setFacilityName2("");
      setFacilityName3("");
      setFacilityName4("");
    };
    fetch(` https://genius-car-server-omega-nine.vercel.app/service`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("hello", data);
        if (data.acknowledged) {
          toast.success("Service added successfully");
          resetService();
          navigate("/services");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <form
      className="mt-3 mb-28 bg-gray-200 shadow-2xl rounded-lg px-12 py-16"
      onSubmit={handelAddService}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input
          name="Service_id"
          type="number"
          value={service_id}
          onChange={(e) => setService_id(e.target.value)}
          placeholder="Service_id 01"
          className="input input-ghost w-full bg-white shadow-2xl input-bordered"
        />
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Service Title"
          className="input input-ghost w-full bg-white shadow-2xl input-bordered"
        />
        <input
          name="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Service Price"
          className="input input-ghost w-full bg-white shadow-2xl input-bordered"
        />
        <input
          name="img"
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="Service ImageUrl"
          className="input input-ghost w-full bg-white shadow-2xl  input-bordered"
          required
        />
      </div>
      <textarea
        name="description"
        className="textarea textarea-bordered mt-8 bg-white shadow-2xl mb-8 h-24 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
        required
      ></textarea>
      <h1 className="text-3xl text-orange-500 font-bold "> Facility</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input
          name={`name1`}
          type="text"
          value={facilityName1}
          onChange={(e) => setFacilityName1(e.target.value)}
          placeholder={`Facility Name1`}
          className="input input-ghost bg-white shadow-2xl input-bordered"
        />
        <textarea
          name={`details1`}
          className="textarea textarea-bordered  bg-white shadow-2xl mb-8 h-12 "
          placeholder="Facility details1"
          value={facilitydetails1}
          onChange={(e) => setFacilityDetails1(e.target.value)}
        ></textarea>
        <input
          name={`name2`}
          type="text"
          value={facilityName2}
          onChange={(e) => setFacilityName2(e.target.value)}
          placeholder={`Facility Name2`}
          className="input input-ghost  bg-white shadow-2xl input-bordered"
        />
        <textarea
          name={`details2`}
          className="textarea textarea-bordered  bg-white shadow-2xl mb-8 h-12 "
          placeholder="Facility details2"
          value={facilitydetails2}
          onChange={(e) => setFacilityDetails2(e.target.value)}
        ></textarea>
        <input
          name={`name3`}
          type="text"
          value={facilityName3}
          onChange={(e) => setFacilityName3(e.target.value)}
          placeholder={`Facility Name3`}
          className="input input-ghost  bg-white shadow-2xl input-bordered"
        />
        <textarea
          name={`details3`}
          className="textarea textarea-bordered  bg-white shadow-2xl mb-8 h-12 "
          placeholder="Facility details3"
          value={facilitydetails3}
          onChange={(e) => setFacilityDetails3(e.target.value)}
        ></textarea>
        <input
          name={`name4`}
          type="text"
          value={facilityName4}
          onChange={(e) => setFacilityName4(e.target.value)}
          placeholder={`Facility Name4`}
          className="input input-ghost  bg-white shadow-2xl input-bordered"
        />
        <textarea
          name={`details4`}
          className="textarea textarea-bordered  bg-white shadow-2xl mb-8 h-12 "
          placeholder="Facility details4"
          value={facilitydetails4}
          onChange={(e) => setFacilityDetails4(e.target.value)}
        ></textarea>
      </div>
      <button className="text-center text-white bg-orange-500 p-2 rounded-lg shadow-md w-full ">
        Add Service
      </button>
    </form>
  );
};

export default AddNewService;
