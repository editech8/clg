import React from "react";
import "./css/NavigationBar.css";
import Drawer from "./Drawer";

const NavigationBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="lines"><Drawer /></div>
        <div className="logo">Brand Logo</div>
        <div className="sections">
          <button>Home</button>
          <button>Services</button>
          <button>Products</button>
          <button>Contact Us</button>
        </div>
        <div className="search">
          <input type="text" id="search" placeholder="Search here..."/>
          <label htmlFor="search">🔍</label>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
