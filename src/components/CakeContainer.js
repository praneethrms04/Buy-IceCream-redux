import React from "react";
import { connect } from "react-redux";
import { buyCake, removeCake } from "./redux/cake/cakeAction";
function CakeContainer(props) {
  return (
    <div>
      <h3>Number of Cakes -{props.noOfCakes} </h3>
      <button onClick={props.buyCake}>Buy cake</button>
      <button onClick={props.removeCake}>Remove Cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    removeCake: () => dispatch(removeCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
