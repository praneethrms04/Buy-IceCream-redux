const redux = require("redux");
const createStore = redux.createStore();
/** 
 * Store
 * shop
 * =>Only one store for the entire application
 * resposibitlites
 *it holds the application state
 *allows access to state via getState()
 *allows state to be updated via dispatch(action)
 *regester listeners via subscribe(listener)
 *handle unregistering of listeners via the function returned by subscribe(listener)
  const redux = require("redux")
  const createStore = redux.createStore()
  const store = createStore()
 */

/**
 * Actions
 * intention to buycake
 * =>it is a plain javascript function
 * =>it has a type property that indicates the type of action being perfored
 * const BUY_CAKE = "BUY_CAKE"
const buyCake = ()=>{
    return {
        type : BUY_CAKE

    }
}
 */
/**
 * Reducer
 * shop keeper
 * functions that accepts the state and action as an arguments and returns the next the next state of the application
 
 */

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}
function buyIcecream() {
  return {
    //it has a type property that indicates the type of action being performed
    type: BUY_ICECREAM,
  };
}

const initailState = {
  noOfCakes: 10,
  noOfIceCreams: 20,
};
// it is a function which contain state and action as an arguments and returns a new state that create a new state
const iceCreamReducer = (state, action) => {
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
const reducer = (state = initailState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        //to make the copy of the state
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
const Icestore = createStore(iceCreamReducer);
console.log("initial state".store.getState());
console.log("initial state".Icestore.getState());

const unsubscibe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
Icestore.dispatch(buyIcecream());

unsubscibe();
