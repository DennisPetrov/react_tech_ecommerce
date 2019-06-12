import {combineReducers} from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import dashboardReducer from './dashboardReducer';
import shopReducer from './shopReducer';
import errorReducer from './errorReducer';
import searchReducer from './searchReducer';
import mainReducer from './mainReducer';

const rootReducer=combineReducers({
    shop:shopReducer,
    auth:authReducer,
    cart:cartReducer,
    dashboard:dashboardReducer,
    error:errorReducer,
    search:searchReducer,
    main:mainReducer,
});


export default rootReducer;