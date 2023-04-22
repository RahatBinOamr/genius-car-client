import React, { useContext, useEffect, useState } from "react";
import CheckOutBanner from "./CheckOutBanner";
import Footer from "../Shared/Footer/Footer";
import { AuthContext } from "../Context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setService] = useState({});
  const [name, setName] = useState(user?.displayName);
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(user?.email);
  useEffect(() => {
    fetch(` https://genius-car-server-omega-nine.vercel.app/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);

  const resetOrder = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setAddress("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(service.img, service);
    const order = {
      serviceName: service.title,
      servicePrice: service.price,
      ServiceImage: service.img,
      customerName: name,
      customerEmail: email,
      customerAddress: address,
      customerPhone: phone,
      customerMessage: message,
    };
    fetch(` https://genius-car-server-omega-nine.vercel.app/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service order successfully");
          resetOrder();
          navigate("/dashboard/OrderCollection");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <CheckOutBanner />
      <div className="mt-32">
        <h1 className="text-xl font-bold">
          Your Product{" "}
          <span className="text-xl font-bold text-orange-500">
            {service.title}
          </span>{" "}
          and price{" "}
          <span className="text-xl font-bold text-orange-500">
            ${service.price}
          </span>{" "}
        </h1>
        <form
          className="mt-4 mb-28 bg-gray-200 shadow-2xl rounded-lg px-12 py-16"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First Name"
              className="input input-ghost w-full bg-white shadow-2xl input-bordered"
            />
            <input
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your address"
              className="input input-ghost w-full bg-white shadow-2xl input-bordered"
            />

            <input
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone"
              className="input input-ghost w-full bg-white shadow-2xl  input-bordered"
              required
            />
            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="input input-ghost w-full bg-white shadow-2xl input-bordered"
              readOnly
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered mt-8 bg-white shadow-2xl mb-8 h-24 w-full"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button className="w-full bg-orange-500   text-white font-bold rounded-lg shadow-2xl p-3">
            {" "}
            Order Confirm
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
