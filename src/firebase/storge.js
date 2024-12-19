import { storage } from "./config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Upload file to Cloud Storage
export const uploadFile = async (file, folderPath = "uploads/") => {
  try {
    const storageRef = ref(storage, `${folderPath}${file.name}`);
    await uploadBytes(storageRef, file);
    const fileURL = await getDownloadURL(storageRef);
    console.log("File uploaded successfully:", fileURL);
    return fileURL;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
