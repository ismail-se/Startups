import React from "react";
import "../style/Hero.css";
import "../style/AppsAndServices.css";
import startups from "../img/startups.png";
import bizplan from "../img/bizplan.png";
import clarity from "../img/clarity.png";
import fundable from "../img/fundable.png";
import launchrock from "../img/launchrock.png";
import zirtual from "../img/zirtual.png";

const AppsAndServices = () => {
  const heroStyle = {
    background: "#1D2734",
    height: "30rem",
  };
  return (
    <div>
      <div style={heroStyle} className="hero">
        <div className="text">
          <h1>Products</h1>
        </div>
        <div className="img">
          <img
            className="img"
            src="https://dq2uhp934kg74.cloudfront.net/production/20201210-0534/media/illustrations/hero_people-launched.svg"
            alt=""
          />
        </div>
      </div>
      <div className="platform">
        <h1>A Platform for the Entire Startup Journey</h1>
        <p>
          A comprehensive suite of software and services to build a business
          plan, find mentors, customers, funding and skilled team members.
        </p>
        <div className="images">
          <img src={startups} alt=""/>
          <img src={bizplan} alt=""/>
          <img src={clarity} alt=""/>
          <img src={fundable} alt=""/>
          <img src={launchrock} alt=""/>
          <img src={zirtual} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default AppsAndServices;
