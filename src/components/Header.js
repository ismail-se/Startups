import React from "react";
import "../style/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const sidebarOben = () => {
    let side = document.querySelector(".sidebar");
    if (!side.classList.contains("sidebarOpen"))
    side.classList.add("sidebarOpen");
    else
    side.classList.remove("sidebarOpen");
  }
  return (
    <div>
      <header>
        <div className="left">
          <MenuIcon className="menu" onClick={sidebarOben} />
          <div className="logo">Startups.com</div>
        </div>
        <div className="center">
          <ul>
            <Link to="/education">
              <li>Eduction</li>
            </Link>
            <Link to="/community">
              <li>Community</li>
            </Link>
            <Link to="/library">
              <li>Library</li>
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>
          </ul>
        </div>
        <div className="right">
          <p>About</p>
          <SearchIcon className="search" />
          <button>Signup</button>
          <button className="signin">Signin</button>
        </div>
      </header>
      <Sidebar />
    </div>
  );
};

export default Header;
