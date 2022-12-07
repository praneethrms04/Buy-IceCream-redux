import { combineReducers } from "redux";
import { iceCreamReducer } from "./icecream/iceCreamReducer";
import { cakeReducer } from "./cake/cakeReducer";
import { userReducer } from "./user/userReducer";
export const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    user : userReducer
})