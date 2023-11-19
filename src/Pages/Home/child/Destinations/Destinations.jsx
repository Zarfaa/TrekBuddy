import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebaseApp from "../../../../Constant/FirebaseConfig";
import "./Destinations.css";

let Destinations = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImageURLs = async () => {
      try {
        const imageNames = ["MureeHills.jpg","KPK.jpg","KaghanValley.jpg","HunzaValley.jpg","Gilgit-Baltistan.jpg", "AzadKashmir.jpg"];
        const imagePromises = imageNames.map(async (imageName) => {
          const storageRef = ref(getStorage(firebaseApp), imageName);
          const url = await getDownloadURL(storageRef);
          return { url, caption: getImageCaption(imageName) };
        });

        const imageURLs = await Promise.all(imagePromises);
        setImageURLs(imageURLs);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching image URLs from Firebase Storage:", error);
        setLoading(false); 
      }
    };

    fetchImageURLs();
  }, []);

  const getImageCaption = (imageName) => {
    const nameWithoutExtension = imageName.split(".")[0];
    return nameWithoutExtension;
  };

  return (
    <>
      <h2 className="section_title">Top Destinations</h2>
      <h4 className="section_subtitle">Explore the beauty of North Pakistan</h4>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="Destinations_container">
          {imageURLs.map((image, index) => (
            <div key={index} className="flex-item">
              <img src={image.url} alt={`Destination ${index + 1}`} />
              <div className="caption">{image.caption}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Destinations;
