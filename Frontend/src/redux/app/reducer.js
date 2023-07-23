import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    getParts: [],
    getSinglePart: {},
    addPartRes: {},
    updatePartRes: {},
    deletePartRes: {},
    isError: false
}

// reducer-
export const reducer = (state=initState, action) => {
    const {type, getParts, getSinglePart, addPartRes, updatePartRes, deletePartRes} = action;

    switch(type){
        // get all parts-
        case types.GET_PART_REQUEST :
            return {...state, isLoading: true}

        case types.GET_PART_SUCCESS :
            return {...state, isLoading: false, getParts}

        case types.GET_PART_ERROR :
            return {...state, isLoading: false, isError: true, getParts}


        // get single part-
        case types.GET_SINGLE_PART_REQUEST :
            return {...state, isLoading: true}

        case types.GET_SINGLE_PART_SUCCESS :
            return {...state, isLoading: false, getSinglePart}

        case types.GET_SINGLE_PART_ERROR :
            return {...state, isLoading: false, isError: true, getSinglePart}


        // add new part-
        case types.ADD_NEW_PART_REQUEST :
            return {...state, isLoading: true}

        case types.ADD_NEW_PART_SUCCESS :
            return {...state, isLoading: false, addPartRes}

        case types.ADD_NEW_PART_ERROR :
            return {...state, isLoading: false, isError: true, addPartRes}


        // update part-
        case types.UPDATE_PART_REQUEST :
            return {...state, isLoading: true}

        case types.UPDATE_PART_SUCCESS :
            return {...state, isLoading: false, updatePartRes}

        case types.UPDATE_PART_ERROR :
            return {...state, isLoading: false, isError: true, updatePartRes}


        // delete part-
        case types.DELETE_PART_REQUEST :
            return {...state, isLoading: true}

        case types.DELETE_PART_SUCCESS :
            return {...state, isLoading: false, deletePartRes}

        case types.DELETE_PART_ERROR :
            return {...state, isLoading: false, isError: true, deletePartRes}


        // default-
        default :
            return {...state}
    }
}