import * as actionTypes from './actionTypes';
import axios from '../../axios-init.js';
import { globalError } from './errorActions';

export const searchFastStart = () => {
    return {
        type:actionTypes.SEARCH_FAST_START
    }
}
export const searchFastSuccess = (result) => {
    return {
        type:actionTypes.SEARCH_FAST_SUCCESS,
        payload:result
    }
}

export const searchFastError = (error) => {
    return {
        type:actionTypes.SEARCH_FAST_ERROR,
        payload:error
    }   
}

export const searchFast = (subject) => {
    return dispatch => {
        dispatch(searchFastStart());
        axios.get("/products/?name_like="+subject+"&_limit=6")
        .then((response) => {
            dispatch(searchFastSuccess(response.data));
        })
        .catch((error) => {
            dispatch(globalError(error.message))
        })
    }
}