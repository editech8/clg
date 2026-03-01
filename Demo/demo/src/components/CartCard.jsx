import React, { useContext, useEffect, useState } from "react";
import "./css/CartCard.css";
import { MdDelete } from "react-icons/md";
import { cartProducts } from "../context/cartProducts";

const CartCard = ({
  product,
  key,
  id,
  image,
  price,
  title,
  rating,
  description,
}) => {
  const { cart, setCart } = useContext(cartProducts);

  const [cartItemCount, setCartItemCount] = useState(1);

    function removeProduct() {
      setCart((prevCart) => prevCart.filter((currentProduct) => currentProduct.id != id))
    }

  return (
    <div className="cartCardMain">
      <div className="productimg">
        <img src={image} />
      </div>
      <div className="cartProductInfo">
        <p className="cartItemTitle">{title}</p>
        <div className="incDesButtons">
          <button
            className="desButton"
            onClick={() => {
              setCartItemCount((prev) => {
                if (prev <= 0) {
                  return 0;
                } else {
                  return prev - 1;
                }
              });
            }}
          >
            -
          </button>
          <p className="cartItemCount">{cartItemCount}</p>
          <button
            className="incButton"
            onClick={() => {
              setCartItemCount((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="cartItempriceAndDelete">
        <p className="cartItemPrice">
          Price: $ {(price * cartItemCount).toFixed(2)}
        </p>
        <button className="cartItemDeleteButton"
        onClick={() => removeProduct()}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
