import { ADD_ITEM } from "./cartType";

const initialState = {
  item: 0,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        item: state.item + parseInt(action.payload),
      };
    default:
      return state;
  }
};
