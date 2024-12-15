import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "./config";

const storage = getStorage(app);

/**
 * Upload File to Firebase Storage
 * @param {File} file - The file to upload
 * @param {string} folder - The storage folder path (default: "uploads")
 * @returns {Promise<string>} - The download URL of the uploaded file
 */
export const uploadFile = async (file, folder = "uploads") => {
  try {
    // Generate a unique filename using timestamp and original file name
    const uniqueFileName = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, `${folder}/${uniqueFileName}`);

    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, file);

    // Get the download URL of the uploaded file
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("File upload failed. Please try again.");
  }
};

/**
 * Delete File from Firebase Storage
 * @param {string} filePath - The full path of the file in storage (e.g., "uploads/filename.jpg")
 * @returns {Promise<void>}
 */
export const deleteFile = async (filePath) => {
  try {
    const fileRef = ref(storage, filePath);
    await deleteObject(fileRef);
    console.log("File deleted successfully:", filePath);
  } catch (error) {
    console.error("Error deleting file:", error);
    throw new Error("File deletion failed. Please try again.");
  }
};

export default storage;
