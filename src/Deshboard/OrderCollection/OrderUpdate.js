import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const OrderUpdate = () => {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(` https://genius-car-server-omega-nine.vercel.app/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);
  let {
    customerAddress: meanulCustomerAddress,
    customerMessage: meanulCustomerMessage,
    customerName: meanulCustomerName,
    customerPhone: meanulCustomerPhone,
  } = order;
  const navigate = useNavigate();
  const [customerName, setName] = useState(meanulCustomerName);
  const [customerAddress, setAddress] = useState(meanulCustomerAddress);
  const [customerMessage, setMessage] = useState(meanulCustomerMessage);
  const [customerPhone, setPhone] = useState(meanulCustomerPhone);
  const handelUpdateOrder = (e) => {
    e.preventDefault();
    const upDateOrder = {
      customerName,
      customerAddress,
      customerPhone,
      customerMessage,
    };
    console.log(upDateOrder);
    fetch(
      ` https://genius-car-server-omega-nine.vercel.app/order/${order._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(upDateOrder),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          toast.success(`update successfully on ${upDateOrder._id}`);
          console.log(data);
          navigate("/dashboard/OrderCollection");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form
        onSubmit={handelUpdateOrder}
        className="mt-4 mb-28 bg-gray-200 shadow-2xl rounded-lg px-12 py-16"
      >
        <input
          name="firstName"
          type="text"
          value={customerName}
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
          className="input input-ghost w-full mt-4 bg-white shadow-2xl input-bordered"
        />
        <input
          name="address"
          type="text"
          value={customerAddress}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Your address"
          className="input input-ghost w-full mt-4 bg-white shadow-2xl input-bordered"
        />

        <input
          name="phone"
          type="text"
          value={customerPhone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your Phone"
          className="input input-ghost mt-4 w-full bg-white shadow-2xl  input-bordered"
          required
        />
        <textarea
          name="message"
          className="textarea textarea-bordered mt-4 bg-white shadow-2xl mb-8 h-24 w-full"
          placeholder="Your Message"
          value={customerMessage}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="w-full bg-orange-500   text-white font-bold rounded-lg shadow-2xl p-3">
          {" "}
          Update Order
        </button>
      </form>
    </div>
  );
};

export default OrderUpdate;
