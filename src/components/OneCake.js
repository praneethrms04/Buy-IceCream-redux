import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cart/cartAction";
const OneCart = () => {
  const [number, setNumber] = useState(1);
  const item = useSelector((state) => state.item);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>OneCake = {item}</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(addToCart(number))}>{number}add to cart</button>
    </div>
  );
};

export default OneCart;
