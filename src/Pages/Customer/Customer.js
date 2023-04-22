import React from "react";
import quote from "../../assets/icons/quote.svg";
const Customer = () => {
  return (
    <>
      <div className="text-center mb-16 mt-20">
        <p className="text-2xl font-bold text-orange-600">Testimonial</p>
        <h2 className="text-5xl font-semibold">What Customer Says</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour,
          <br /> or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid gap-4 mb-12 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-slate-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full "
                />
              </div>
              <div>
                <h4 className="font-bold">Awlad Hossain</h4>
                <span className="text-xs dark:text-gray-400">Businessman</span>
              </div>
            </div>
            <img src={quote} alt="" className="w-20 " />
          </div>
          <div className="p-4 space-y-2 text-sm ">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.
            </p>
            <p>
              Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
              mauris cursus venenatis. Maecenas gravida urna vitae accumsan
              feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
            </p>
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
          </div>
        </div>
        <div className="container bg-slate-100 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  ">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full "
                />
              </div>
              <div>
                <h4 className="font-bold">Awlad Hossain</h4>
                <span className="text-xs dark:text-gray-400">Businessman</span>
              </div>
            </div>
            <img src={quote} alt="" className="w-20 " />
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.
            </p>
            <p>
              Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
              mauris cursus venenatis. Maecenas gravida urna vitae accumsan
              feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
            </p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
