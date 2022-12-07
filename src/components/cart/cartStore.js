import { createStore } from "redux";
import { cartReducer } from "./cartReducer";
export const cartStore = createStore(cartReducer);
