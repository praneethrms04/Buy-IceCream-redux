import { BUY_CAKE, REMOVE_CAKE } from "./cakeTypes";

const initialState = {
  noOfCakes: 10,
};
export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes + 1,
      };
    case REMOVE_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};
