import { useEffect, useState, useRef } from "react";
import NavigationBar from "./NavigationBar";
import "./css/Home.css";
import ItemCard from "./ItemCard";
import CartCard from "./CartCard";
import { useContext } from "react";
import { whichProduct } from "../context/whichProduct";
import { searchProduct } from "../context/searchProduct";
import { isCartActive } from "../context/cartActive";
import { cartProducts } from "../context/cartProducts";

const Home = () => {
  const { searchedProduct } = useContext(searchProduct);

  const { category } = useContext(whichProduct);

  const { cartActive, setCartActive } = useContext(isCartActive);

  const { cart, setCart } = useContext(cartProducts);

  const [isDataArrived, setIsDataArrived] = useState(false);
  const [result, setResult] = useState([]);
  const [categoryLable, setCategoryLable] = useState(category);
  const APItries = useRef(10);
  const arrivedData = useRef([]);

  const totalPrice = cart
    .reduce((acc, val) => val.quantity * val.price + acc, 0)
    .toFixed(2);

  useEffect(() => {
    async function fetchAPI() {
      try {
        if (!isDataArrived) {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          arrivedData.current = data;
          setIsDataArrived(true);
        }
        const filteredData = arrivedData.current.filter((val) => {
          const isCategoryMatch =
            category === "result" || val.category === category;

          const isSearchMatch = val.title
            .toLowerCase()
            .includes(searchedProduct.toLowerCase());

          return isCategoryMatch && isSearchMatch;
        });

        setResult(() => filteredData);
      } catch (err) {
        if (APItries.current > 0) {
          console.log(
            `Data failed to arrive. ${APItries.current} tries remaining.`,
          );
          APItries.current--;
          setTimeout(() => fetchAPI(), 2000);
        } else {
          setIsDataArrived(false);
          console.log("Max tries reached.", err);
        }
      }
    }
    if (cartActive) {
      setCategoryLable("Cart");
    } else if (category === "result") {
      setCategoryLable("All categories");
    } else {
      setCategoryLable(category);
    }

    fetchAPI();
  }, [category, searchedProduct, cartActive]);

  return (
    <div className="main">
      <div className="navigationBar">
        <NavigationBar />
      </div>
      <h2 className="categoryLable">{categoryLable} : </h2>
      <div className="products">
        {cartActive ? (
          <>
            {cart.map((val) => {
              return (
                <CartCard
                  product={val}
                  key={val.id}
                  id={val.id}
                  image={val.image}
                  price={val.price}
                  title={val.title}
                  rating={val.rating}
                  description={val.description}
                />
              );
            })}
            <p className="totalPrice">Total Price: ${totalPrice}</p>
          </>
        ) : isDataArrived ? (
          result.map((val) => {
            return (
              <ItemCard
                product={val}
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
        ) : (
          "Not arrived"
        )}
      </div>
    </div>
  );
};

export default Home;
