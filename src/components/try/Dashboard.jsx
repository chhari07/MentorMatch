import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mentorsPerPage] = useState(6); // Number of mentors per page
  const [loading, setLoading] = useState(true);

  const categories = [
    "Artificial Intelligence",
    "Data Science",
    "Web Development",
    "Cybersecurity",
    "Machine Learning",
    "Blockchain",
    "DevOps",
    "Database Management",
    "Cloud Computing",
    "Computer Vision",
  ];

  useEffect(() => {
    axios
      .get("https://chhari07.github.io/mentorhip-api/data.json")
      .then((response) => {
        const mentorData = response.data.users || [];
        setMentors(mentorData);
        setFilteredMentors(mentorData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching mentor data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredMentors(mentors);
    } else {
      const filtered = mentors.filter((mentor) =>
        mentor.categories.some((category) => selectedCategories.includes(category))
      );
      setFilteredMentors(filtered);
    }
    setCurrentPage(1); // Reset to the first page after filtering
  }, [selectedCategories, mentors]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const indexOfLastMentor = currentPage * mentorsPerPage;
  const indexOfFirstMentor = indexOfLastMentor - mentorsPerPage;
  const currentMentors = filteredMentors.slice(indexOfFirstMentor, indexOfLastMentor);

  const totalPages = Math.ceil(filteredMentors.length / mentorsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div className="text-center p-8">Loading mentors...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 p-4">
      {/* Sidebar Filters */}
      <aside className="bg-gray-100 p-4 rounded-md shadow-md lg:w-1/4 mb-6 lg:mb-0">
        <h3 className="text-xl font-bold mb-4">Filter by Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-teal-500 bg-teal-500"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* Mentor List */}
      <main className="flex-1">
        <h2 className="text-2xl font-bold text-teal-500 mb-6 text-center">Mentor Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentMentors.length > 0 ? (
            currentMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{mentor.name}</h3>
                <p className="text-gray-600">Gender: {mentor.gender}</p>
                <p className="text-gray-600">Country: {mentor.country}</p>
                <p className="text-gray-600">
                  Mentorships Provided: {mentor.mentorshipCount || 0}
                </p>
                <p className="text-gray-600">
                  Specialties:{" "}
                  {Array.isArray(mentor.categories)
                    ? mentor.categories.join(", ")
                    : "No categories"}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No mentors found matching your preferences.
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredMentors.length > mentorsPerPage && (
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;