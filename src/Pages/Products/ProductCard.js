import React from "react";

const ProductCard = ({ product }) => {
  const { img, title, price } = product;
  return (
    <div className="relative card group card-compact  overflow-hidden  w-96 bg-base-100 shadow-lg p-1 ">
      <figure className="">
        <img
          src={img}
          alt=""
          className="transition duration-300 ease-in-out hover:scale-110 object-cover object-center w-96 mb-[-30px] bg-slate-200 rounded-t-md h-72 "
        />
      </figure>
      <div className=" p-0  space-y-8">
        <div className="card-body items-center text-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
          <p className="text-orange-600 text-xl font-bold ">${price}</p>
        </div>
      </div>
      <button class="absolute bottom-0 left-0 right-0 py-2 px-4 bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition duration-300">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
