import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const resetProduct = () => {
    setTitle("");
    setImg("");
    setPrice("");
  };
  const handelAddProduct = (e) => {
    e.preventDefault();
    const product = {
      title,
      img,
      price,
    };
    fetch(` https://genius-car-server-omega-nine.vercel.app/product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("hello", data);
        if (data.acknowledged) {
          toast.success("Product added successfully");
          resetProduct();
          navigate("/Products");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form
        onSubmit={handelAddProduct}
        className="mt-3 mb-28 bg-gray-200 shadow-2xl rounded-lg px-12 py-16"
      >
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Product Title"
          className="input input-ghost w-full mt-3 bg-white shadow-2xl input-bordered"
        />
        <input
          name="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Product Price"
          className="input input-ghost w-full bg-white mt-3 shadow-2xl input-bordered"
        />
        <input
          name="img"
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="Product ImageUrl"
          className="input input-ghost w-full bg-white mt-3 shadow-2xl  input-bordered"
          required
        />
        <button className="text-center mt-3 text-white bg-orange-500 p-2 rounded-lg shadow-md w-full ">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
