import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sample = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage state for a modal or dropdown

  const handleButtonClick = () => {
    setIsOpen(false); // Close the modal or menu on button click
  };

  return (
    <div>
      {/* Link to Profile */}
      <Link to="/Profile">
        <button
          className="relative py-2 px-8 text-black text-base font-bold overflow-hidden bg-teal-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:bg-black w-full mt-6"
          onClick={handleButtonClick}
        >
          Go to Profile
        </button>
      </Link>

      {/* Link to Dashboard */}
      <Link to="/Dashboard">
        <button
          className="relative py-2 px-8 text-black text-base font-bold overflow-hidden bg-teal-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:bg-black w-full mt-6"
          onClick={handleButtonClick}
        >
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Sample;
