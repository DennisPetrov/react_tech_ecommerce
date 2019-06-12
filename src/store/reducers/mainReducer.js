import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../helpers/utility";


const initialState={
    reviewsList:[],
    mainSliderItems:[]
}

const fetchMainSliderSuccess=(state,action) => {
    return updateObject(state,{
        mainSliderItems:action.payload
    })
}
const fetchReviewListSuccess=(state,action) => {
    return updateObject(state,{
        reviewsList:action.payload
    })
}

export default function mainReducer(state=initialState,action){
    switch(action.type){
        case actionTypes.FETCH_MAIN_SLIDER_SUCCESS : return fetchMainSliderSuccess(state,action);
        case actionTypes.FETCH_REVIEWS_LIST_SUCCESS : return fetchReviewListSuccess(state,action);
        default:
            return state; 
    }
}