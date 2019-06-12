import axios from '../../axios-init.js';
import * as actionTypes from './actionTypes';
import { globalError } from './errorActions.js';


export const fetchMainSliderItems = () => {
    return dispatch  => {
        axios.get("/mainslider").then((response) => {
            dispatch(fetchMainSliderItemsSuccess(response.data))
        }).catch((error) => {
            console.log(error);
            dispatch(globalError(error.message));
        })
    }
}

const fetchMainSliderItemsSuccess = (result) => {
    return {
        type: actionTypes.FETCH_MAIN_SLIDER_SUCCESS,
        payload: result
    }
}


const fetchReviewsSuccess = (result) => {
    return {
        type: actionTypes.FETCH_REVIEWS_LIST_SUCCESS,
        payload: result
    }
}

export  const fetchReviewsList = () => {
    return dispatch => {
        axios.get("/reviews").then((response) => {
            dispatch(fetchReviewsSuccess(response.data));
        }).catch((error) => {
            console.log(error);
            dispatch(globalError(error.message));
        })
    }
}