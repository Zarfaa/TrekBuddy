import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from "../../Constant/FirebaseConfig";
import "./Photos.css";

const storage = getStorage(app);

const Photos = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [photoURLs, setPhotoURLs] = useState([]);

  const handleFileUpload = async (event) => {
    const files = event.target.files;
    const newPhotos = Array.from(files).slice(0, 5);

    for (const photo of newPhotos) {
      const storageRef = ref(storage, `room-photos/${photo.name}`);
      await uploadBytes(storageRef, photo);

      const downloadURL = await getDownloadURL(storageRef);
      setPhotoURLs((prevURLs) => [...prevURLs, downloadURL]);
    }
    setUploadedPhotos((prevPhotos) => [...newPhotos, ...prevPhotos]);
  };

  useEffect(() => {
    console.log("Download URLs:", photoURLs);
  }, [photoURLs]);

  return (
    <div>
      <h3>Property Photos</h3>
      <span className='mb-5'>Upload up to 5 room photos</span>
      <div className='Photos_container'>
        <input type="file" onChange={handleFileUpload} multiple accept="image/*" className='input_button'/>
      </div>
      <div>
        {uploadedPhotos.map((photo, index) => (
          <img key={index} src={URL.createObjectURL(photo)} alt={`Room Photo ${index}`} style={{ width: "40%", margin: "4%" }}/>
        ))}
      </div>
    </div>
  );
};

export default Photos;
