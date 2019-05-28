import * as actionTypes from './actionTypes';


export const globalError = (errorText) =>{
    return {
        type:actionTypes.GLOBAL_ERROR,
        errorText:errorText,
    }
}