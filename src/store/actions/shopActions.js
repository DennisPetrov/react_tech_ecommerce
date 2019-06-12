import * as actionTypes from './actionTypes';
import axios from '../../axios-init.js';
import { globalError } from './errorActions';



export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_START
    }
}

export const fetchProductsSuccess = (result) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        payload: result
    }
}
export const fetchAdditiveSuccess = (result) => {
    return {
        type: actionTypes.FETCH_ADDITIVE_SUCCESS,
        payload: result
    }
}
export const fetchFilterSuccess = (result) => {
    return {
        type: actionTypes.FETCH_FILTER_SUCCESS,
        payload: result
    }
}
export const initialFetchSuccess = (result) => {
    return {
        type: actionTypes.INITIAL_FETCH_SUCCESS,
        payload: result
    }
}

export const fetchFilter = () => {
    return dispatch => {
        axios.get("/filter").then((response) => {
            dispatch(fetchFilterSuccess(response.data));
        }).catch((error) => {
            console.log(error);
            dispatch(globalError(error.message));
        })
    }
}

export const initialFetch = (options) => {
    return dispatch => {
        dispatch(fetchProductsStart());
        const queryProducts = constructQuery(options);
        Promise.all([
            axios.get("/filter"),
            axios.get(queryProducts)
        ]).then((response) => {
            dispatch(initialFetchSuccess(response));
        }).catch((error) => {
            console.log(error);
            dispatch(globalError(error.message));
        })
    }
}
export const fetchProducts = (options) => {
    return dispatch => {
        const query = constructQuery(options);
        dispatch(fetchProductsStart());
        axios.get(query).then((response) => {
            if (options.additiveQuery) {
                dispatch(fetchAdditiveSuccess({
                    data: response.data,
                }));
            } else {
                dispatch(fetchProductsSuccess({
                    data: response.data,
                    productsCurrentTotalCount: parseInt(response.headers["x-total-count"])
                }));
            }
        }).catch((error) => {
            console.log(error);
            dispatch(globalError(error.message));
        })
    }
}

const constructQuery = (options) => {
    let query = "/products/?";
    if (options.itemsPerPage !== "all") {
        query += "_limit=" + options.itemsPerPage + "&";
        query += "_page=" + options.page + "&";
    }
    if (options.sortType) {
        let sort = options.sortType.split("-");
        if (sort.length === 2) {
            query += "_sort=" + sort[0] + "&_order=" + sort[1] + "&";
        } else {
            query += "_sort=" + sort[0] + "&_order=desc&";
        }
    }
    for (const key in options.filters) {
        if (options.filters[key].type === "check" && options.filters[key].values.length) {
            for (let i = 0; i < options.filters[key].values.length; i++) {
                query += key + "=" + options.filters[key].values[i] + "&";
            }
        }
        if (options.filters[key].type === "range") {
            query += key + "_gte=" + options.filters[key].min + "&";
            query += key + "_lte=" + options.filters[key].max + "&";
        }
    }
    return query;
}
