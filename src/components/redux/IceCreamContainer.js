import React from "react";
import { buyIceCream } from "../redux/icecream/iceCreamAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const IceCreamContainer = () => {
  const noOfIceCreams = useSelector((state) => state.iceCream.noOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>no of Ice creams = {noOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream())}>buynow</button>
    </div>
  );
};

export default IceCreamContainer;
