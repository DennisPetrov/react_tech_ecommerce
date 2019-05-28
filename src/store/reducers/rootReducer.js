import {combineReducers} from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import dashboardReducer from './dashboardReducer';
import shopReducer from './shopReducer';
import errorReducer from './errorReducer';



const rootReducer=combineReducers({
    shop:shopReducer,
    auth:authReducer,
    cart:cartReducer,
    dashboard:dashboardReducer,
    error:errorReducer
});


export default rootReducer;