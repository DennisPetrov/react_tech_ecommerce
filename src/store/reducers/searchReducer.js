import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../helpers/utility";
const initialState={
    searchFastResult:[],
    searchFastLoading:false,
}

const searchFastStart = (state,action) => {
    return updateObject(state,{
        searchFastLoading:true,
    })
}
const searchSuccess =(state,action) => {
    return updateObject(state,{
        searchFastResult:action.payload,
        searchFastLoading:false,
    })
}
const searchError = (state,action) => {
    return updateObject(state,{
        searchError:action.payload,
        searchLastErrorTime:Date.now(),
        searchFastLoading:false,
    })
}
const searchReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.SEARCH_FAST_START : return searchFastStart(state,action);
        case actionTypes.SEARCH_FAST_ERROR : return searchError(state,action);
        case actionTypes.SEARCH_FAST_SUCCESS : return searchSuccess(state,action);
        default:
            return state;
    }
}


export default searchReducer;