// firebase/auth.js
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    updateProfile,
    onAuthStateChanged,
  } from "firebase/auth";
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
  import app from "./config"; // Ensure this is the correct path to your Firebase config file
  
  // Initialize Firebase Authentication and Storage
  const auth = getAuth(app);
  const storage = getStorage(app);
  const googleProvider = new GoogleAuthProvider();
  
  /**
   * Sign Up Function with Profile Photo Upload
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @param {File} profilePhoto - User's profile photo file
   * @returns {Promise} Firebase Auth response
   */
  export const signUpWithProfilePhoto = async (email, password, profilePhoto) => {
    try {
      // Create User
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Upload Profile Photo to Firebase Storage
      const photoURL = await uploadFile(profilePhoto, `profilePhotos/${user.uid}`);
  
      // Update User Profile with Photo URL
      await updateProfile(user, { photoURL });
  
      console.log("User signed up successfully:", user);
      return userCredential;
    } catch (error) {
      console.error("Error signing up with profile photo:", error);
      throw error;
    }
  };
  
  /**
   * Upload File to Firebase Storage
   * @param {File} file - File to upload
   * @param {string} folder - Storage folder path
   * @returns {Promise<string>} Download URL of the uploaded file
   */
  export const uploadFile = async (file, folder = "uploads") => {
    try {
      const uniqueFileName = `${Date.now()}-${file.name}`;
      const storageRef = ref(storage, `${folder}/${uniqueFileName}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };
  
  /**
   * Sign In Function
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise} Firebase Auth response
   */
  export const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };
  
  /**
   * Sign In with Google
   * @returns {Promise} Firebase Auth response
   */
  export const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      console.log("User signed in with Google:", userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    }
  };
  
  /**
   * Sign Out Function
   * @returns {Promise} Firebase Auth response
   */
  export const logout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
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
  
  export default auth;
  