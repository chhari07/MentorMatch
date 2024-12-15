import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged 
  } from "firebase/auth";
  import app from "./config"; // Ensure this is the correct path to your Firebase config file
  
  // Initialize Firebase Authentication
  const auth = getAuth(app);
  
  // Initialize Google Provider
  const googleProvider = new GoogleAuthProvider();
  
  /**
   * Sign Up Function
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise} Firebase Auth response
   */
  export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  /**
   * Sign In Function
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise} Firebase Auth response
   */
  export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  /**
   * Sign In with Google
   * @returns {Promise} Firebase Auth response
   */
  export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  
  /**
   * Sign Out Function
   * @returns {Promise} Firebase Auth response
   */
  export const logout = () => {
    return signOut(auth);
  };
  
  /**
   * Get Current User Profile
   * @returns {object | null} User profile object or null if not authenticated
   */
  export const getCurrentUserProfile = () => {
    return auth.currentUser;
  };
  
  /**
   * Listen to Auth State Changes
   * @param {function} callback - Callback function to handle user state
   */
  export const onAuthStateChange = (callback) => {
    onAuthStateChanged(auth, callback);
  };
  
  // Export the default authentication instance
  export default auth;
  