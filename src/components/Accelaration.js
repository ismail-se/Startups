import React from "react";
import "../style/Hero.css";

const Accelaration = () => {
  const heroStyle = {
    background: "#849FAD",
  };
  return (
    <div>
      <div style={heroStyle} className="hero">
        <div className="text">
          <h1>
            Funding {'\n'}
            Accelerator
          </h1>
        </div>
        <div className="img">
          <img
            className="img"
            src="https://dq2uhp934kg74.cloudfront.net/production/20201210-0534/media/illustrations/hero_people-launched.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Accelaration;
