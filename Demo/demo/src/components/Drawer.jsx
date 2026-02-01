import React, { useState } from "react";
import "./css/Drawer.css";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="menuLines"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h1>&#9776;</h1>
      </button>
      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}/>}
      <aside className={`drawer ${isOpen ? "Open" : ""}`}>
        <h3>Menu</h3>
        <ul className="items">
          <li>Profile</li>
          <li>Setting</li>
          <li>History</li>
        </ul>
      </aside>
    </>
  );
};

export default Drawer;
