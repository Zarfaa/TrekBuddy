import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Carousel } from "react-bootstrap"; 
import "./Carousel.css";
import firebaseApp from "../../../../Constant/FirebaseConfig";


const CarouselComponent = () => {
  const getImageUrlFromFirebaseStorage = async (imageName) => {
    const storageRef = ref(getStorage(firebaseApp), imageName);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  };

  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const imageNames = ["carousel_img1.jpg", "carousel_img4.jpg", "carousel_img3.jpg"];
    Promise.all(imageNames.map(getImageUrlFromFirebaseStorage))
      .then((urls) => setCarouselImages(urls))
      .catch((error) => console.log("Error fetching image URLs:", error));
  }, []);

  return (
    <Carousel fade>
      {carouselImages.map((imageUrl, index) => (
        <Carousel.Item key={index}>
          <img src={imageUrl} className="d-block w-100" alt={`carousel_img${index + 1}`} />
          <Carousel.Caption>
            <h1 className="carousel_title">Trek Buddy</h1>
            <p className="carousel_subtitle">
              Your ultimate destination for safe and affordable travel experiences in the breathtaking Northern areas
              of Pakistan. We are dedicated to curating unforgettable journeys that capture the essence of Pakistan's
              natural wonders and cultural richness. Whether you are a local adventurer seeking to embark on a
              soul-stirring escapade or an international traveler eager to immerse yourself in the enchanting beauty
              of Pakistan, we have designed our services to cater to all your travel dreams.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
