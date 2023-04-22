import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  useEffect(() => {
    fetch(" https://genius-car-server-omega-nine.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="text-center mb-4 mt-14">
        <p className="text-2xl font-bold text-orange-600">
          Browse Our Products
        </p>
        <h2 className="text-5xl font-semibold">Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour,
          <br /> or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((product, i) => (
          <ProductCard product={product} />
        ))}
      </div>
      <div className=" mx-auto text-center mt-10 mb-5 ">
        <ProductPagination
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          totalPosts={products.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Products;
