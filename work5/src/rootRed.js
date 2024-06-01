import { combineReducers } from '@reduxjs/toolkit';
import numberReducer from './functions';

const rootReducer = combineReducers({
    number: numberReducer,
});

export default rootReducer;