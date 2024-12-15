import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import app from "./config";

const db = getFirestore(app);

// Add Document
export const addDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef;
};

// Fetch Documents
export const fetchDocuments = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return documents;
};

// Delete Document
export const deleteDocument = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
};

export default db;
