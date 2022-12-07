import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cart/cartAction";
const Cart = () => {
  const item = useSelector((state) => state.item);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>cart = {item} </h3>
      <button onClick={() => dispatch(addToCart())}>add to cart</button>
    </div>
  );
};

export default Cart;
