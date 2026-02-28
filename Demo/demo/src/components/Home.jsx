import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import Drawer from "./Drawer";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function categoriseItems(APIres) {
      try {
        const menClothig = APIres.filter((val) => {
          if (val.category === "men's clothing") return val;
        });
        const jewelery = APIres.filter((val) => {
          if (val.category === "jewelery") return val;
        });
        const electronics = APIres.filter((val) => {
          if (val.category === "electronics") return val;
        });
        const womenClothing = APIres.filter((val) => {
          if (val.category === "women's clothing") return val;
        });
        console.log(menClothig, jewelery, electronics, womenClothing);
      } catch {}
    }
    let result = [];
    async function fetchAPI() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        result = await response.json();
        console.log(result);
        categoriseItems(result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAPI();
  }, []);

  return (
    <>
      <NavigationBar />
    </>
  );
};

export default Home;
