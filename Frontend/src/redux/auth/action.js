import axios from "axios"; 
import * as types from "./actionType";
import { serverName } from "../server";

// sign up-
export const signUpFun = (payload) => (dispatch) => {
    dispatch({type: types.SIGN_UP_REQUEST})
    return axios.post(`${serverName}/api/v1/signup`, payload)
            .then((res)=>{
                dispatch({type: types.SIGN_UP_SUCCESS, signup: res.data})
            })
            .catch((err)=>{
                dispatch({type: types.SIGN_UP_ERROR, signup: err.response.data})
            })
}


// log in-
export const logInFun = (payload) => (dispatch) => {
    dispatch({type: types.LOG_IN_REQUEST})
    return axios.post(`${serverName}/api/v1/login`, payload)
            .then((res)=>{
                dispatch({type: types.LOG_IN_SUCCESS, login: res.data})
            })
            .catch((err)=>{
                dispatch({type: types.LOG_IN_ERROR, login: err.response.data})
            })
}
