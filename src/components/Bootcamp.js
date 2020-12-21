import React from "react";
import "../style/Hero.css";
import "../style/Bootcamp.css";

const Bootcamp = () => {
  const heroStyle = {
    background: "#28656A",
  };
  return (
    <div>
      <div style={heroStyle} className="hero">
        <div className="text">
          <h1>What if your idea could</h1>
          <h1 className="yellow">create limitless freedom?</h1>
          <button>Apply Now</button>
        </div>
        <div className="img"></div>
      </div>
      <div className="viable">
        <div className="text">
          <h1>
            Is your idea actually <i>viable</i>?
          </h1>
          <p>
            Of the billions of startup ideas generated every day, almost none
            actually see the light of day. What separates your cocktail napkin
            startup concept sketch from Twitter Founder Jack Dorsey’s notebook
            scribble? ACTION! (and no doubt some talent)
          </p>
          <p>
            It also takes a thoughtful process to help you determine if your
            idea can actually thrive as a viable business. But unless you’ve
            built a startup before, where do you begin?
          </p>
          <p>
            That’s where we come in. We’ve helped thousands of startups
            accelerate from concept to launch – now we want to show you exactly
            how to approach your idea just like the best startups in the world
            do.
          </p>
          <button>Apply for the Idea Valdation Bootcamp</button>
        </div>
        <div className="img">
          <img src="https://dq2uhp934kg74.cloudfront.net/production/20201210-0534/_/common/client/site/pages/Shared/Products/Bootcamps/Landing/assets/idea-notes.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
