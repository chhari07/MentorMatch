// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQ_NRcJZub8tGZlhTur_dXhVMxxD96j0",
  authDomain: "mentorarea-ad924.firebaseapp.com",
  projectId: "mentorarea-ad924",
  storageBucket: "mentorarea-ad924.firebasestorage.app",
  messagingSenderId: "429158103008",
  appId: "1:429158103008:web:fb3a775c62c0c415609d85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Get Storage instance
const storage = getStorage(app);

// Get Firestore instance
const db = getFirestore(app); // Initialize Firestore

// Export instances for use in other files
export { auth, storage, db };  // Named export
