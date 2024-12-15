import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "./config";

const storage = getStorage(app);

// Upload File
export const uploadFile = async (file, folder = "uploads") => {
  const storageRef = ref(storage, `${folder}/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};

export default storage;
