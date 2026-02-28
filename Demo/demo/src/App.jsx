import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/Home";
import { whichProduct } from "./context/whichProduct";
import { useState } from "react";
import { searchProduct } from "./context/searchProduct";

const App = () => {
  const [category, setCategory] = useState("result");
  const [searchedProduct, setSearchedProduct] = useState("");

  return (
    <BrowserRouter>
      <searchProduct.Provider value={{ searchedProduct, setSearchedProduct }}>
        <whichProduct.Provider value={{ category, setCategory }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </whichProduct.Provider>
      </searchProduct.Provider>
    </BrowserRouter>
  );
};

export default App;
