import "./App.css";
import { Provider } from "react-redux";
// import { rootReducer } from "./components/redux/rootstore";
// import Cart from "./components/Cart";
// import Hooks from "./components/Hooks";
import { store } from "./components/redux/store";
import IceCreamContainer from "./components/redux/IceCreamContainer";
// import OneCake from "./components/OneCake";
// import CakeContainer from "./components/CakeContainer";
// import UserContainer from "./components/redux/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <Hooks /> */}
        <IceCreamContainer />
        {/* <Cart /> */}
        {/* <OneCake /> */}
        {/* <UserContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
