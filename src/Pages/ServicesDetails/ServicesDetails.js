import React from "react";
import ServiceBanner from "./ServiceBanner";
import ServiceDetailsCollection from "./ServiceDetailsCollection";
import Footer from "../../Shared/Footer/Footer";

const ServicesDetails = () => {
  return (
    <>
      <div>
        <ServiceBanner />
        <ServiceDetailsCollection />
        <Footer />
      </div>
    </>
  );
};

export default ServicesDetails;
