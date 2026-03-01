import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/Home";
import { whichProduct } from "./context/whichProduct";
import { useState } from "react";
import { searchProduct } from "./context/searchProduct";
import { isCartActive } from "./context/cartActive";
import { cartProducts } from "./context/cartProducts";

const App = () => {
  const [category, setCategory] = useState("result");
  const [searchedProduct, setSearchedProduct] = useState("");
  const [cartActive, setCartActive] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <searchProduct.Provider value={{ searchedProduct, setSearchedProduct }}>
        <whichProduct.Provider value={{ category, setCategory }}>
          <cartProducts.Provider value={{ cart, setCart }}>
            <isCartActive.Provider value={{ cartActive, setCartActive }}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
              </Routes>
            </isCartActive.Provider>
          </cartProducts.Provider>
        </whichProduct.Provider>
      </searchProduct.Provider>
    </BrowserRouter>
  );
};

export default App;
