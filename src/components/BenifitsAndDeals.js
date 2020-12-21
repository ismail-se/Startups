import React from "react";
import "../style/Hero.css";
import "../style/BenifitsAndDetails.css";
import trophy from "../img/trophy.png";
import boxes from "../img/boxes.png";
import ticket from "../img/ticket.png";

const BenifitsAndDeals = () => {
  const heroStyle = {
    background: "#687992",
  };
  return (
    <div>
      <div style={heroStyle} className="hero">
        <div className="text">
          <h1>Startup Benifits</h1>
          <p>
            Save thousands of dollars on all of the startup services you need.
          </p>
          <button>Browse All Benifits</button>
        </div>
        <div className="img">
          <img
            className="img"
            src="https://dq2uhp934kg74.cloudfront.net/production/20201210-0534/media/deals/hero_startups-benefits.svg"
            alt=""
          />
        </div>
      </div>
      <div className="service">
        <h1>Every startup service you use, at a fraction of the price.</h1>
        <div className="items">
          <div className="item">
            <img src={trophy} alt="" />
            <h2>Save a Bundle</h2>
            <p>
              Why pay full price? We've negotiated the lowest rates on every
              popular product.
            </p>
          </div>
          <div className="item">
            <img src={boxes} alt="" />
            <h2>Top Tier Products</h2>
            <p>
              We only work with the top products and services in every category.
            </p>
          </div>
          <div className="item">
            <img src={ticket} alt="" />
            <h2>Redeem Instantly</h2>
            <p>
              No wait, no fuss. Redeem your discounts instantly to begin saving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenifitsAndDeals;
