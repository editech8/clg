import { useState } from "react";
import "./css/Drawer.css";
import { useContext } from "react";
import { whichProduct } from "../context/whichProduct";
import { isCartActive } from "../context/cartActive";

const Drawer = () => {
  const { category, setCategory } = useContext(whichProduct);

  const [isOpen, setIsOpen] = useState(false);

  const { cartActive, setCartActive } = useContext(isCartActive);

  function deactiveCart() {
    setCartActive(false);
  }

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
      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)} />}
      <aside className={`drawer ${isOpen ? "Open" : ""}`}>
        <h3>Menu</h3>
        <ul className="items">
          <li>
            <button
              className="category"
              onClick={() => {
                setCategory("result");
                deactiveCart();
              }}
            >
              All Categories
            </button>
          </li>
          <li>
            <button
              className="category"
              onClick={() => {
                setCategory("men's clothing");
                deactiveCart();
              }}
            >
              men's clothing
            </button>
          </li>
          <li>
            <button
              className="category"
              onClick={() => {
                setCategory("jewelery");
                deactiveCart();
              }}
            >
              jewelery
            </button>
          </li>
          <li>
            <button
              className="category"
              onClick={() => {
                setCategory("electronics");
                deactiveCart();
              }}
            >
              electronics
            </button>
          </li>
          <li>
            <button
              className="category"
              onClick={() => {
                setCategory("women's clothing");
                deactiveCart();
              }}
            >
              women's clothing
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Drawer;
