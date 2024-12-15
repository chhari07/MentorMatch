import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Howitswork from "../components/Howitswork";
import Testimonials from "../components/TestimonialSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Test from "../components/Sample";


const Home = () => {




  return (
    <div className="bg-black  " >
      <Hero/>
      <Features/>
      <Howitswork/>
      <Test/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default Home;
