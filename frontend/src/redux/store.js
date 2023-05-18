// import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {composeWithDevTools} from 'redux-devtools-extension'
import { uniReducers, uniMajors, uniById, getComment } from './reducers/uniReducers';
//redux data
const reducer = combineReducers({
    uniList:uniReducers,
    majors: uniMajors,
    uniWithId: uniById,
    commentList: getComment,
})
const middleware = [thunk];
//setting dev tools for redux
const store = configureStore(
    {
        reducer,
        devTools:true
        // middleware: [...getDefaultMiddleware()],
    // composeWithDevTools(applyMiddleware(...middleware))
    })
export default store;