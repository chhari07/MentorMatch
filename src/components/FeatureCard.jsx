import React from 'react';

const FeatureCard = ({ title, description, subtitle, color, textColor }) => {
  return (
    <div className="w-full sm:w-1/2 mb-10 sm:mb-0">
      <div className="relative h-full">
        <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${color} rounded-lg`}></span>
        <div
          className={`relative h-full p-5 bg-white border-2 ${textColor} rounded-lg transition-all duration-300 ease-in-out hover:bg-black hover:text-white`}
        >
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-3 mb-1 text-xs font-medium">{subtitle}</p>
          <p className="mb-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
