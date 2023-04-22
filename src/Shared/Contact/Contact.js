import React, { useContext, useState } from "react";
import Footer from "../Footer/Footer";
import ContactBanner from "./ContactBanner";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-toastify";
const Contact = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const resetContactFrom = () => {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };
  const handleContact = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      phone,
      message,
    };
    fetch(` https://genius-car-server-omega-nine.vercel.app/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("hello", data);
        if (data.acknowledged) {
          toast.success("Your message send successfully");
          resetContactFrom();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <ContactBanner />
      <div>
        <form
          className="mt-32 mb-28 bg-gray-200 shadow-2xl rounded-lg px-12 py-16"
          onSubmit={handleContact}
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
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-ghost w-full bg-white shadow-2xl input-bordered"
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
            Submit Your Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
