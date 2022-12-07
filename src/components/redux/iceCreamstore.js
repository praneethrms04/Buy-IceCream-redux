import { createStore } from "react-redux";
import { iceCreamReducer } from "./icecream/iceCreamReducer";
export const iceCreamStore = createStore(iceCreamReducer);
