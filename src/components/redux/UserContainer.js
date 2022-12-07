import React, { useEffect } from "react";
import { fetchUsers } from "./user/userActions";
import { useDispatch, useSelector } from "react-redux";

const UserContainer = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  console.log(userData);
  console.log(dispatch);
  useEffect(() => {
   const data = dispatch(fetchUsers());
   console.log(data);
    
  });

  return (
    <>
      <div>userData = {userData}</div>
    </>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };
export default UserContainer;
