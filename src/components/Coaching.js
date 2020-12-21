import React from "react";
import "../style/Hero.css";

const Coaching = () => {
  const heroStyle = {
    background: "#16202C",
    height: "40rem",
  };
  return (
    <div>
      <div style={heroStyle} className="hero">
        <div className="text">
          <h5>STARTUP COACHING</h5>
          <h1>Building a Startup is hard.</h1>
          <h1 className="yellow" style={{marginBottom: "1rem"}}>Don’t do it alone.</h1>
          <p style={{ fontSize: "1.3rem" }}>
          Building a startup is ridiculously hard. It often takes new skills, knowledge, and resources at every stage. Let our team of experienced Startup coaches partner with you to help navigate this exciting journey.
          </p>
          <button>Get A Startup Coach</button>
        </div>
        <div className="img"></div>
      </div>
    </div>
  );
};

export default Coaching;
