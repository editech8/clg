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

  function removeProduct() {
    setCart((prevCart) =>
      prevCart.filter((currentProduct) => currentProduct.id != id),
    );
  }

  const productTotalPrice = (price * product.quantity).toFixed(2);

  function updateQuantity(amount) {
    setCart((prevcart) => {
      return prevcart.map((currentProduct) => {
        if (currentProduct.id === id) {
          return {
            ...currentProduct,
            quantity: Math.max(1, currentProduct.quantity + amount),
          };
        } else {
          return currentProduct;
        }
      });
    });
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
              updateQuantity(-1);
            }}
          >
            -
          </button>
          <p className="cartItemCount">{product.quantity}</p>
          <button
            className="incButton"
            onClick={() => {
              updateQuantity(1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="cartItempriceAndDelete">
        <p className="cartItemPrice">Price: $ {productTotalPrice}</p>
        <button
          className="cartItemDeleteButton"
          onClick={() => removeProduct()}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
