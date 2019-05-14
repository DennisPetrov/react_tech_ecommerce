import {combineReducers} from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import dashboardReducer from './dashboardReducer';
import shopReducer from './shopReducer';



const rootReducer=combineReducers({
    shop:shopReducer,
    auth:authReducer,
    cart:cartReducer,
    dashboard:dashboardReducer,
});


export default rootReducer;