import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../helpers/utility";
const initialState = {
    productList: [],
    productsCurrentTotalCount:0,
    productsLoading: false,
    filter:false,
    additiveFetch:false,
}

const fetchProductsStart = (state,action) => {
    return updateObject(state, {
        productsLoading: true,
    })
}
const fetchAdditiveSuccess = (state, action) => {
    return updateObject(state, {
        productList: [...state.productList,...action.payload.data],
        productsLoading: false,
        additiveFetch:true,
    })
}
const fetchProductsSuccess = (state, action) => {
    return updateObject(state, {
        productList: action.payload.data,
        productsCurrentTotalCount:action.payload.productsCurrentTotalCount,
        productsLoading: false,
        additiveFetch:false,
    })
}
const fetchFilterSuccess = (state,action) => {
    return updateObject(state, {
        filter:action.payload
    })
}
const initialFetchSuccess =(state,action) => {
    return updateObject(state,{
        filter:action.payload[0].data,
        productList:action.payload[1].data,
        productsLoading: false,
        productsCurrentTotalCount:action.payload[1].headers["x-total-count"],
        additiveFetch:false
    })
}
const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START: return fetchProductsStart(state, action);
        case actionTypes.FETCH_SUCCESS: return fetchProductsSuccess(state, action);
        case actionTypes.FETCH_FILTER_SUCCESS: return fetchFilterSuccess(state, action);
        case actionTypes.INITIAL_FETCH_SUCCESS: return initialFetchSuccess(state, action);
        case actionTypes.FETCH_ADDITIVE_SUCCESS: return fetchAdditiveSuccess(state, action);
        default:
            return state;
    }
}


export default shopReducer;