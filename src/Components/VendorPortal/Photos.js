import React, { useState } from 'react';
import "./Photos.css"

const Photos = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newPhotos = Array.from(files).slice(0, 5);
    setUploadedPhotos((prevPhotos) => [...newPhotos, ...prevPhotos]);
  };

  return (
    <div>
      <h3>Property Photos</h3>
      <span className='mb-5'>upload upto 5 room photos</span>
      <div className='Photos_container'>
        <input type="file" onChange={handleFileUpload} multiple accept="image/*" className='input_button'/>
      </div>
      <div>
        {uploadedPhotos.map((photo, index) => (
          <img key={index} src={URL.createObjectURL(photo)} alt={`Room Photo ${index}`} style={{width: "40%" , margin: "4%"}}/>
        ))}
      </div>
    </div>
  );
};

export default Photos;
