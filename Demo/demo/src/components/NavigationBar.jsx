import React, { useContext } from "react";
import "./css/NavigationBar.css";
import Drawer from "./Drawer";
import { searchProduct } from "../context/searchProduct";

const NavigationBar = () => {
  const { searchedProduct, setSearchedProduct } = useContext(searchProduct);
  // console.log(searchedProduct)
  return (
    <>
      <div className="navbar">
        <div className="lines">
          <Drawer />
        </div>
        <div className="logo">Brand Logo</div>
        <div className="sections">
          <button>Home</button>
          <button>Services</button>
          <button>Products</button>
          <button>Contact Us</button>
        </div>
        <div className="search">
          <input
            type="text"
            id="search"
            onChange={(e) => {
              setSearchedProduct(e.target.value);
            }}
            value={searchedProduct}
            placeholder="Search here..."
          />
          <label htmlFor="search">🔍</label>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
