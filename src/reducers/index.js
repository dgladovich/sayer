import { combineReducers } from 'redux'

function itemsReducer (state = [], action){
    return state;
}

function commentsReducer (state = []){
    return state;
}


export default combineReducers({items: itemsReducer, comments: commentsReducer})
