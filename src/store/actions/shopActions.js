import * as actionTypes from './actionTypes';
import axios from '../../axios-init.js';
import { globalError } from './errorActions';

export const fetchProductsStart = () => {
    return {
        type:actionTypes.FETCH_START
    }
}

export const fetchProductsSuccess = () => {
    return {
        type:actionTypes.FETCH_SUCCESS,
    }
}

export const fetchProducts= (filters) => {
    return {
        type:actionTypes.FETCH_SUCCESS,
    }
}

export const searchFastSuccess = (result) => {
    return {
        type:actionTypes.SEARCH_SUCCESS,
        payload:result
    }
}

export const searchFastError = (error) => {
    return {
        type:actionTypes.SEARCH_ERROR,
        payload:error
    }   
}

export const searchFast = (subject) => {
    return dispatch => {
        axios.get("/products3/?name_like="+subject+"&_limit=6")
        .then((response) => {
            dispatch(searchFastSuccess(response.data));
        })
        .catch((error) => {
            dispatch(globalError(error.message))
        })
    }
}