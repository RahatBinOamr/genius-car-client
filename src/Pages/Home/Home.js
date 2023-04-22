import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Address from "../Address/Address";
import Products from "../Products/Products";
import TeamMembers from "../Team/TeamMembers";
import Choose from "../Choose/Choose";
import Customer from "../Customer/Customer";
import Footer from "../../Shared/Footer/Footer";
const Home = () => {
  return (
    <div className="mt-3">
      <Banner />
      <About />
      <Services />
      <Address />
      <Products />
      <TeamMembers />
      <Choose />
      <Customer />
      <Footer />
    </div>
  );
};

export default Home;
