import "./css/ItemCard.css";
import { cartProducts } from "../context/cartProducts";
import { useContext } from "react";

const ItemCard = ({
  product,
  id,
  image,
  price,
  title,
  rating,
  description,
}) => {
  const { cart, setCart } = useContext(cartProducts);

  return (
    <div className="cardMain">
      <p className="cardTitle">{title}</p>
      <div className="cardImage">
        <img src={image} />
      </div>
      <div className="discAndRating">
        <p className="disc">{description}</p>
        <p className="rating">
          Rating: {rating.rate}, Count: {rating.count}
        </p>
      </div>
      <div>
        <p className="price">Price : ${price}</p>
      </div>
      <div className="cartButton">
        <button
          onClick={() => {
            const isItemAlreadyInCart = cart.find((item) => item.id === id);
            if (!isItemAlreadyInCart) {
              setCart([...cart, product,]);
            } else {
              alert("Item already in cart!");
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
