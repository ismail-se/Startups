import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <Link to="/education"><li className="heading">Education</li></Link>
                <Link to="/education/founder"><li>Founder</li></Link>
                <Link to="/education/idea"><li>Idea</li></Link>
                <Link to="/education/formation"><li>Formation</li></Link>
                <Link to="/education/planning"><li>Planning</li></Link>
                <Link to="/products"><li className="heading">Products</li></Link>
                <Link to="/products/apps-and-services"><li>Apps and Services</li></Link>
                <Link to="/products/benifits-and-deals"><li>Benifits and Deals</li></Link>
                <Link to="/products/bootcamp"><li>Bootcamp</li></Link>
                <Link to="/products/coaching"><li>Coaching</li></Link>
                <Link to="/products/accelaration"><li>Accelaration</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar
