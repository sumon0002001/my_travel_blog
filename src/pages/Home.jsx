import React from "react";
import Homepost from "../components/Homepost";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        <Homepost />
        <Homepost />
        <Homepost />
        <Homepost />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
