import React, { useEffect, useState, useRef } from "react";
import NavigationBar from "./NavigationBar";
import "./css/Home.css";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { whichProduct } from "../context/whichProduct";
import { searchProduct } from "../context/searchProduct";

const Home = () => {
  const { searchedProduct } = useContext(searchProduct);

  const { category } = useContext(whichProduct);

  const [isDataArrived, setIsDataArrived] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function categoriseItems(APIres) {
      try {
        if (category === "result") {
          setResult(APIres);
        } else if (searchedProduct) {
          setResult(() => {
            return APIres.filter((val) => {
              let tempSearch = searchedProduct.toLowerCase();
              if (val.title.toLowerCase().includes(tempSearch)) {
                return val;
              }
            });
          });
        } else {
          setResult(() => {
            return APIres.filter((val) => {
              if (val.category === category) {
                return val;
              }
            });
          });
        }

        setIsDataArrived(true);
      } catch {}
    }

    async function fetchAPI() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setResult(data);
        categoriseItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAPI();
  }, [category, searchedProduct]);

  return (
    <div className="main">
      <div className="navigationBar">
        <NavigationBar />
      </div>
      <div className="products">
        {isDataArrived
          ? result.map((val) => {
              return (
                <ItemCard
                  key={val.id}
                  id={val.id}
                  image={val.image}
                  price={val.price}
                  title={val.title}
                  rating={val.rating}
                  description={val.description}
                />
              );
            })
          : "Not arrived"}
      </div>
    </div>
  );
};

export default Home;
