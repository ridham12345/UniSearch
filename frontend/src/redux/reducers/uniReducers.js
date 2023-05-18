import * as actionTypes from '../action/types'
//Reducers to store all changes into states using redux
export const uniReducers = (state = [], action) => {
    switch(action.type){
     
        case actionTypes.LISTUNI:
            // Listing all Universities
            return action.payload
        
        default:
            return state;

    }
} 

export const uniMajors = (state = [], action) => {
    switch(action.type){
        case actionTypes.LISTMAJORS:
            // Listing all Courses
            return action.payload
        default:
            return state;

    }
} 

export const uniById = (state = [], action) => {
    switch(action.type){
        case actionTypes.UNIBYID:
            // Listing universities based on ID
            return action.payload
        

        default:
            return state;

    }
} 

export const getComment = (state = [], action) => {
    switch(action.type){
        case actionTypes.ADDNEWCOMMENT:
            // Adding an item
            return [ ...state,action.payload];
        case actionTypes.LISTCOMMENT:
            // Listing comments
            return action.payload
        case actionTypes.UPDATECOMMENT:
            // Updating an existing item in state
             return state.map(comment => (
                comment._id === action.payload._id ? {...comment,userName: action.payload.userName, comment: action.payload.comment, universityId:action.payload.universityId} : comment
            ))
        case actionTypes.DELETECOMMENT:
            // Deleting a item from state
            return state.filter(comment => comment._id !== action.payload._id)
        default:
            return state;

    }
} 



