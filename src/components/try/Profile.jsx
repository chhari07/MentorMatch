import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ setMentorPreferences }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    mentorGender: '',
    category: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMentorPreferences(formData); // Set mentor preferences
    navigate('/Dashboard'); // Redirect to dashboard
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-teal-500 mb-6">Profile Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="mentorGender" className="block text-sm font-semibold text-gray-700">Mentor Gender</label>
            <select
              id="mentorGender"
              name="mentorGender"
              value={formData.mentorGender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">Select Mentor Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">Select Category</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Data Science">Data Science</option>
              <option value="Web Development">Web Development</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Blockchain">Blockchain</option>
              <option value="DevOps">DevOps</option>
              <option value="Database Management">Database Management</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Computer Vision">Computer Vision</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-teal-500 rounded-full hover:bg-teal-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
