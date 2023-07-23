import * as types from "./actionType.js";

// initial state-
const initState = {
    isLoading : false,
    signup: {},
    login: {},
    isError: false
}

export const reducer = (state=initState, action) => {
    const {type, signup, login} = action;

    switch(type){
        // sign up-
        case types.SIGN_UP_REQUEST :
            return {...state, isLoading: true}

        case types.SIGN_UP_SUCCESS :
            return {...state, isLoading: false, signup}

        case types.SIGN_UP_ERROR :
            return {...state, isLoading: false, isError: true, signup}

        
        // log in-
        case types.LOG_IN_REQUEST :
            return {...state, isLoading: true}

        case types.LOG_IN_SUCCESS :
            return {...state, isLoading: false, login}

        case types.LOG_IN_ERROR :
            return {...state, isLoading: false, isError: true, login}

        // default- 
        default :
            return {...state}
    }
}