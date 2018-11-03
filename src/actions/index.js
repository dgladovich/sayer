import {createActions} from 'redux-actions'
import {
    REQUEST_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    ADD_COMMENT,
    DELETE_COMMENT
} from '../constants'


export const actions = createActions(
    'REQUEST_ITEMS',
    'ADD_ITEM',
    'DELETE_ITEM',
    'ADD_COMMENT',
);

