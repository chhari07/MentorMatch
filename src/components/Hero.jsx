import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-gray-900 min-h-screen flex items-center justify-center mb-     bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.qooper.io/hs-fs/hubfs/Blog%20images/mentorship%20program%201%20(1).jpg?width=1800&height=1200&name=mentorship%20program%201%20(1).jpg')", // Add your background image URL here
      }}
    >
      <div className="w-[90%] mx-auto h-full flex items-center justify-center px-4 py-10">
        {/* Left Section */}
        <div className="lg:w-1/2 md:w-2/3 sm:w-full text-center sm:text-left">
          <div className="text-white font-serif font-extrabold uppercase">
            <h1 className="sm:text-6xl xs:text-5xl text-4xl">CONNECT</h1>
            <h1 className="sm:text-6xl xs:text-5xl text-4xl">LEARN</h1>
            <h1 className="sm:text-6xl xs:text-5xl text-4xl text-white ">
              GROW
            </h1>
            <button
              className="relative py-2 px-8 text-black  text-base font-bold overflow-hidden bg-teal-500    rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:bg-black mt-6"
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
