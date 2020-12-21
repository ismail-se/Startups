import React from 'react';
import { Link } from 'react-router-dom';
import "../style/main.css";

function Idea() {
    return (
        <main>
            <div className="main">
            <div className="hero">
                <div>
                <h1>Idea</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium facilis quia eveniet consequuntur ab sapiente voluptates quaerat fugiat, asperiores architecto quisquam labore quo rerum.</p>
                </div>
                <img className="img" src="https://www.startups.com/dist/media/courses/heros/hero_founder.svg" alt=""/>
            </div>
            
        </div>
        <div className="maintopic">
        <div className="topics">
            <ul>
            <li className="heading">TOPICS</li>
                <Link to="/education/founder"><li>Founder</li></Link>
                <Link to="/education/idea"><li>Idea</li></Link>
                <Link to="/education/formation"><li>Formation</li></Link>
                <Link to="/education/planning"><li>Planning</li></Link>
            </ul>
        </div>
        <div className="topic2">
        <h1>Idea</h1>
                <p style={{backgroundColor: "#D9861F"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium facilis quia eveniet consequuntur ab sapiente voluptates quaerat fugiat, asperiores architecto quisquam labore quo rerum.</p>
        </div>
        </div>
        </main> 
    )
}

export default Idea
