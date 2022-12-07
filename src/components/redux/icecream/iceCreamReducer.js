import { BUY_ICECREAM } from "./iceCreamTypes";

// an action is plain js obj which containe state and action as arguments and returns a new state
const initialState = {
  noOfIceCreams: 15,
};
export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};
