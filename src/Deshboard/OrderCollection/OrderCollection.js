import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const OrderCollection = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(" https://genius-car-server-omega-nine.vercel.app/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handelDelete = (_id) => {
    const agree = window.confirm(
      "Are you sure you want to delete this id" + _id
    );
    if (agree) {
      fetch(` https://genius-car-server-omega-nine.vercel.app/order/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remaining = orders.filter((order) => order._id !== _id);
            setOrders(remaining);
            toast.success("Your order has been deleted successfully");
            console.log(data);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-orange-500 text-center mx-auto mt-5 mb-5">
        Your Order Collection{" "}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Address</th>
              {/* <th>Message</th> */}
              <th>Order</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <>
                <h1 className="text-3xl mb-9 mt-10 font-bold text-center text-orange-500 mx-auto">
                  No Order Found Please order Now!!!
                </h1>
                <Link to={"/"}>
                  {" "}
                  <button className=" bg-orange-500 btn-xs text-white font-bold rounded-lg shadow-2xl ">
                    {" "}
                    Back To Home{" "}
                  </button>
                </Link>
              </>
            ) : (
              <>
                {orders?.map((order) => (
                  <tr>
                    <th>
                      <label>
                        <h1
                          onClick={() => {
                            handelDelete(order._id);
                          }}
                          className="text-red-600 font-bold text-3xl "
                        >
                          X
                        </h1>
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={order.ServiceImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{order.serviceName}</div>
                          <div className="text-sm opacity-50">
                            ${order.servicePrice}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Name: {order.customerName}
                      <br />
                      <span>Address: {order.customerAddress}</span> <br />
                      <span>PhoneNumber: {order.customerPhone}</span> <br />
                    </td>

                    {/* <td>
                        <div className="badge badge-ghost badge-sm ">
                          {order.customerMessage}
                        </div>
                      </td> */}

                    <td>
                      {" "}
                      <button className=" bg-orange-500 btn-xs text-white font-bold rounded-lg shadow-2xl ">
                        Order
                      </button>{" "}
                    </td>
                    <th>
                      <Link to={`/dashboard/OrderUpdate/${order._id}`}>
                        <button className=" bg-green-500 btn-xs text-white font-bold rounded-lg shadow-2xl ">
                          Edit
                        </button>
                      </Link>
                    </th>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderCollection;
