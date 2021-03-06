import React from 'react';
import { Link } from 'react-router-dom';
import "../style/main.css";

function Formation() {
    return (
        <main>
            <div className="main">
            <div className="hero">
                <div>
                <h1>Formation</h1>
                <p>Lorem isum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium facilis quia eveniet consequuntur ab sapiente voluptates quaerat fugiat, asperiores architecto quisquam labore quo rerum.</p>
                </div>
                <img className="img" src="https://www.startups.com/dist/media/courses/heros/hero_planning.svg" alt=""/>
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
        <h1>Formation</h1>
                <p style={{backgroundColor: "#A23519"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium facilis quia eveniet consequuntur ab sapiente voluptates quaerat fugiat, asperiores architecto quisquam labore quo rerum.</p>
        </div>
        </div>
        </main> 
    )
}

export default Formation
