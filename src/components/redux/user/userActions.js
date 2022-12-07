import axios from "axios"
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from "./userTypes"

export const fetchUserRequest =()=>{
    return {
        type :FETCH_USER_REQUEST,
        payload : true 
    }
}
export const fetchUserSuccess =(user) =>{
    return {
        type : FETCH_USER_SUCCESS,
        payload : user
    }
}
export const fetchUserFailure =(error)=>{
   return {
    type :FETCH_USER_FAILURE,
    payload : error
   } 
}

export const fetchUsers =()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            const users = res.data
            dispatch(fetchUserSuccess(users))
            // console.log(res)
        }).catch((error)=>{
            const errMsg = error.message
            dispatch(fetchUserFailure(errMsg))
            // console.log(error)
        })
    }
}