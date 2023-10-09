import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebaseApp from "../../../../Constant/FirebaseConfig";
import "./Packages.css"

const Packages = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImageURLs = async () => {
      try {
        const imageNames = ["EconomyClass-icon.png", "FirstClass-icon.png", "BusinessClass-icon.png"];
        const imagePromises = imageNames.map(async (imageName) => {
          const url = await getDownloadURL(ref(getStorage(firebaseApp), imageName));
          return url;
        });

        const imageURLs = await Promise.all(imagePromises);
        setImageURLs(imageURLs);
      } catch (error) {
        console.error("Error fetching image URLs from Firebase Storage:", error);
      }
      setLoading(false);
    };

    fetchImageURLs();
  }, []);

  return (
    <div className="Package_container">
      <div>
        <h1 className="header">What We Offer</h1>
      </div>
      {loading ? (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
          <div  className="section_container">
            <div className="content_container">
              <div className="Section_content">
                <img src={imageURLs} alt="Economy Class Icon" />
                <h3>Economy Class</h3>
                <p>Budget-friendly accommodation with affordable dining options</p>
                <button>Explore</button>
              </div>

              <div className="Section_content">
                <img src={imageURLs} alt="First Class Icon" />
                <h3>First Class</h3>
                <p>Premium hotels with fine dining experiences, showcasing local & international cuisine</p>
                <button>Explore</button>
              </div>

              <div className="Section_content">
                <img src={imageURLs} alt="Business Class Icon" />
                <h3>Business Class</h3>
                <p>High-end Accommodation with exclusive private guided tours</p>
                <button>Explore</button>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default Packages;
