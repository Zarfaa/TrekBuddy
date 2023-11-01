import React from "react";

import "./Packages.css"

const Packages = () => {


  return (
    <div className="Package_container">

      <div>
        <h1 className="Section-tittle">What We Offer</h1>
      </div>

          <div  className="section-container">

              <div className="Section-content">
                <h3>Economy Class</h3>
                <p>Budget-friendly accommodation with affordable dining options</p>
                <button>Explore</button>
              </div>

              <div className="Section-content">
                <h3>First Class</h3>
                <p>Premium hotels with fine dining experiences, showcasing local & international cuisine</p>
                <button>Explore</button>
              </div>

              <div className="Section-content">
                <h3>Business Class</h3>
                <p>High-end Accommodation with exclusive private guided tours</p>
                <button>Explore</button>
              </div>
          </div>
    </div>
  );
};

export default Packages;
