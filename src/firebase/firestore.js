import { db } from "./config";
import { doc, setDoc, getDoc, deleteDoc, updateDoc, collection, getDocs } from "firebase/firestore";

// Add a new document
export const addDocument = async (collectionName, docData) => {
  try {
    const docRef = doc(collection(db, collectionName));
    await setDoc(docRef, docData);
    console.log("Document added successfully");
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

// Get a single document
export const getDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

// Get all documents from a collection
export const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};

// Update a document
export const updateDocument = async (collectionName, docId, updatedData) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

// Delete a document
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};
