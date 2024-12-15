import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-black">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-500">
              Get Started
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative">How</span> It Works
          </h2>
          <p className="text-base text-white md:text-lg">
            Our platform connects aspiring individuals with expert mentors to achieve professional and personal growth.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
          {/* Step 1 */}
          <div className="p-6 border border-white  rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <div className="text-teal-400">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4H3V3a2 2 0 012-2h4v2H5zm14 0h-4v2h4v4h2V3a2 2 0 00-2-2zm0 18h-4v2h4a2 2 0 002-2v-4h-2v4zm-14 0H3v-4H1v4a2 2 0 002 2h4v-2z"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-white">Step 1</p>
            </div>
            <p className="text-white">
              Sign up and create your profile to start your mentoring journey.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 border border-white  rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <div className="text-teal-400">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h11M9 21V3m0 0L3 8m6-5l6 5"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-white">Step 2</p>
            </div>
            <p className="text-white">
              Browse mentors based on skills, industry, or availability to find the perfect match.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 border border-white   rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <div className="text-teal-400">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-white">Step 3</p>
            </div>
            <p className="text-white">
              Book a session and connect with your mentor via video call or chat.
            </p>
          </div>

          {/* Success */}
          <div className="p-6 border border-white  rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <div className="text-teal-400">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-white">Success</p>
            </div>
            <p className="text-white">
              Achieve your goals with personalized advice and actionable insights from your mentor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
