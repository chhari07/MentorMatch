import React from 'react';
import FeatureCard from './FeatureCard';  // Import the new FeatureCard component

const Features = () => {
  return (
    <>
      <div>
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-white">Mentorship Features</h2>
          <p className="mb-12 text-lg text-white">Here are some of the key features we provide to enhance mentorship experiences.</p>
          <div className="w-full">
            {/* First Row */}
            <div className="flex flex-col w-full mb-10 sm:flex-row sm:space-x-10">
              <FeatureCard
                title="Mentorship Matching"
                description="AI-powered matchmaking to connect mentors and mentees based on shared skills, goals, and interests."
                subtitle="AI-powered matchmaking"
                color="bg-indigo-500"
                textColor="border-indigo-500"
              />
              <FeatureCard
                title="Profile Customization"
                description="Set up and personalize your profile with your role, expertise, skills, interests, and mentorship goals."
                subtitle="Personalized experience"
                color="bg-purple-500"
                textColor="border-purple-500"
              />
            </div>

            {/* Second Row */}
            <div className="flex flex-col w-full sm:flex-row sm:space-x-10">
              <FeatureCard
                title="Connection Management"
                description="Seamlessly send, accept, and manage mentorship requests to foster meaningful connections."
                subtitle="Effortless connections"
                color="bg-blue-400"
                textColor="border-blue-400"
              />
              <FeatureCard
                title="Notifications"
                description="Stay informed with real-time notifications on mentorship requests, updates, and messages."
                subtitle="Real-time alerts"
                color="bg-yellow-400"
                textColor="border-yellow-400"
              />
              <FeatureCard
                title="User Discovery"
                description="Browse through mentor and mentee profiles with filters to easily find the right match."
                subtitle="Easy match search"
                color="bg-green-500"
                textColor="border-green-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <div className="w-full">
            {/* First Row */}
            <div className="flex flex-col w-full mb-10 sm:flex-row sm:space-x-10">
              <FeatureCard
                title="Matching Algorithm"
                description="Develop a basic algorithm that suggests potential mentors or mentees based on matching skills and interests."
                subtitle="------------"
                color="bg-indigo-500"
                textColor="border-indigo-500"
              />
              <FeatureCard
                title="Skill & Interest-Based Filters"
                description="Refine your search with detailed filters based on skills, interests, and mentorship roles."
                subtitle="------------"
                color="bg-purple-500"
                textColor="border-purple-500"
              />
            </div>

            {/* Second Row */}
            <div className="flex flex-col w-full sm:flex-row sm:space-x-10">
              <FeatureCard
                title="Mentorship Requests"
                description="Send, receive, and track mentorship requests to ensure smooth and organized connections."
                subtitle="------------"
                color="bg-blue-400"
                textColor="border-blue-400"
              />
              <FeatureCard
                title="Secure Messaging System"
                description="Engage in secure, in-app messaging with your mentor or mentee to facilitate smooth communication."
                subtitle="------------"
                color="bg-yellow-400"
                textColor="border-yellow-400"
              />
              <FeatureCard
                title="Dashboard"
                description="Manage all your mentorship connections and track progress with a simple and intuitive dashboard."
                subtitle="------------"
                color="bg-green-500"
                textColor="border-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
