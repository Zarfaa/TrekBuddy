import "./about.css"
import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebaseApp from "../../../../Constant/FirebaseConfig";

let About = () => {
  const [imageUrl, setImageUrl] = useState("");

  const getImageUrlFromFirebaseStorage = async () => {
    const imageUrl = await getDownloadURL(ref(getStorage(firebaseApp), "aboutUs.jpg"));
    return imageUrl;
  };

  useEffect(() => {
    getImageUrlFromFirebaseStorage()
      .then((url) => setImageUrl(url))
      .catch((error) => console.log("Error getting image URL:", error));
  }, []);


    return(
      <section >
        <div className="about_container">

        <div className="about__section">
        <h2 className="section__title">Why Plan your trip with </h2>
        <h2 className="section__title1">Trek Buddy</h2>
        <div className="about__content">
         <p>Our travel website, provides you with unforgettable journeys and seamless travel experiences. We are dedicated to providing you with a seamless platform to discover, plan, and book your dream vacations.</p>
         </div>
         <div className="about__data">
            <div>
            <p> <i className='bx bxs-check-circle'></i> Explore a wide range of destinations across Pakistan</p>
            </div>
            <div>  
            <p> <i className='bx bxs-check-circle'></i> Efforlessly choose rentals that suits your preferences and budget.</p>
            </div>
            <div>  
            <p> <i className='bx bxs-check-circle'></i> Immerse yourself in a world of exciting activities and attractions.</p> 
            </div>        
            <div>
            <p> <i className='bx bxs-check-circle'></i> Embark on an extraordinary travel adventure with our travel website</p>  
            </div>            
          </div> 
          </div> 

            <div className="about__img">
            <img src={imageUrl} alt="About_Us"/>
            </div>

            </div>  

             <div>
    </div>     
      </section> 
    )
}

export default About