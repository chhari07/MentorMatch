import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase/auth"; // Assuming you created an `auth.js` file for custom setup

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Signed In:", userCredential.user);
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error Signing In:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User Signed In:", result.user);
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleAppleSignIn = async () => {
    const provider = new OAuthProvider("apple.com");
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Apple User Signed In:", result.user);
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Apple Sign-In Error:", error.message);
    }
  };

  return (
    <div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="login"
                >
                  E-mail
                </label>
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type="email"
                  id="login"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-right mb-4">
                <a
                  className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex justify-center w-full items-center">
                <button
                  type="submit"
                  className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center px-6 py-2 border rounded-lg shadow-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-red-400 transition ease-in duration-200"
              >
                Google Sign-In
              </button>
              <button
                onClick={handleAppleSignIn}
                className="flex items-center px-6 py-2 border rounded-lg shadow-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition ease-in duration-200"
              >
                Apple Sign-In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
