import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../helpers/utility";
const initialState={
    errorText:"",
    errorTime:0,
}
const globalError=(state,errorText) => {
    return updateObject(state,{
        errorText:errorText,
        errorTime:Date.now()
    })
}
const errorReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.GLOBAL_ERROR: return globalError(state,action.errorText);
        default:
            return state;
    }
}


export default errorReducer;