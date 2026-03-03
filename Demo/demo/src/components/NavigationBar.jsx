import { useContext } from "react";
import "./css/NavigationBar.css";
import Drawer from "./Drawer";
import { searchProduct } from "../context/searchProduct";
import { FaShoppingCart } from "react-icons/fa";
import { isCartActive } from "../context/cartActive";
import { cartProducts } from "../context/cartProducts";
import { whichProduct } from "../context/whichProduct";

const NavigationBar = () => {
  const { searchedProduct, setSearchedProduct } = useContext(searchProduct);

  const { cartActive, setCartActive } = useContext(isCartActive);

  const { cart, setCart } = useContext(cartProducts);

  const { category, setCategory } = useContext(whichProduct);

  return (
    <>
      <div className="navbar">
        <div className="lines">
          <Drawer />
        </div>
        <div className="logo">Brand Logo</div>
        <div className="sections">
          <button
            onClick={() => {
              setCategory("result");
              setCartActive(false);
            }}
          >
            Home
          </button>
          <button>Services</button>
          <button>Products</button>
          <button>Contact Us</button>
          <button
            onClick={() => {
              setCartActive((prev) => !prev);
            }}
          >
            <FaShoppingCart />
            <span className="cartCount">{cart.length}</span>
          </button>
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
