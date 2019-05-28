import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../helpers/utility";
const initialState={
    searchResult:[],
    searchError:false,
    searchLastErrorTime:0,
}

const searchSuccess =(state,action) => {
    return updateObject(state,{
        searchResult:action.payload
    })
}
const searchError = (state,action) => {
    return updateObject(state,{
        searchError:action.payload,
        searchLastErrorTime:Date.now()
    })
}
const shopReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.SEARCH_ERROR : return searchError(state,action);
        case actionTypes.SEARCH_SUCCESS : return searchSuccess(state,action);
        default:
            return state;
    }
}


export default shopReducer;