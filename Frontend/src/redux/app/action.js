import { serverName } from "../server";
import * as types from "./actionType";
import axios from "axios"; 

// get part-
export const getPartFun = (searchText = "") => (dispatch) => {
    dispatch({type: types.GET_PART_REQUEST})
    return axios.get(`${serverName}/api/v1/part?query=${searchText}`)
            .then((res)=>{
                dispatch({type: types.GET_PART_SUCCESS, getParts: res.data})
            })
            .catch((err)=>{
                dispatch({type: types.GET_PART_ERROR, getParts: err.response.data})
            })
}

// get single part-
export const getSinglePartFun = (_id) => (dispatch) => {
    dispatch({type: types.GET_SINGLE_PART_REQUEST})
    return axios.get(`${serverName}/api/v1/part/${_id}`)
            .then((res)=>{
                dispatch({type: types.GET_SINGLE_PART_SUCCESS, getSinglePart: res.data})
            })
            .catch((err)=>{
                dispatch({type: types.GET_SINGLE_PART_ERROR, getSinglePart: err.response.data})
            })
}

// add new part-
export const addNewPartFun = (payload, user) => (dispatch) => {
    dispatch({type: types.ADD_NEW_PART_REQUEST})
    return axios.post(`${serverName}/api/v1/part`, payload, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.ADD_NEW_PART_SUCCESS, addPartRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.ADD_NEW_PART_ERROR, addPartRes: err.response.data})
            })
}

// update product-
export const updatePartFunAdmin = (payload, user, _id) => (dispatch) => {
    dispatch({type: types.UPDATE_PART_REQUEST})
    return axios.patch(`${serverName}/api/v1/part/${_id}`, payload, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.UPDATE_PART_SUCCESS, updatePartRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.UPDATE_PART_ERROR, updatePartRes: err.response.data})
            })
}

// delete new product-
export const deletePartFunAdmin = (_id, token) => (dispatch) => {
    dispatch({type: types.DELETE_PART_REQUEST})
    return axios.delete(`${serverName}/api/v1/part/${_id}`, { headers: {"Authorization" : `${token}`} })
            .then((res)=>{
                dispatch({type: types.DELETE_PART_SUCCESS, deletePartRes: res.data})
            })
            .catch((err)=>{
                dispatch({type: types.DELETE_PART_ERROR, deletePartRes: err.response.data})
            })
}