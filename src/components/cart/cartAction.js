import { ADD_ITEM } from "./cartType";

export const addToCart = (number=1) => {
  return {
    type: ADD_ITEM,
    payload: number,
  };
};
