import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    REQUEST_ITEMS,
    REQUEST_ITEMS_ERROR,
    REQUEST_ITEMS_SUCCESS,
    ADD_COMMENT,
    ADD_COMMENT_ERROR,
    ADD_COMMENT_SUCCESS,
    ADD_ITEM,
    ADD_ITEM_ERROR,
    ADD_ITEM_SUCCESS,
    DELETE_ITEM,
    DELETE_ITEM_ERROR,
    DELETE_ITEM_SUCCESS,
} from '../constants'
import Api from '../api'

function* fetchItems(action) {
    try {
        const user = yield call(Api.fetchItems);
        yield put({type: REQUEST_ITEMS_SUCCESS, user: user});
    } catch (e) {
        yield put({type: REQUEST_ITEMS_ERROR, message: e.message});
    }
}
function* addItem(action) {
    try {
        const user = yield call(Api.addItem);
        yield put({type: ADD_ITEM_SUCCESS, user: user});
    } catch (e) {
        yield put({type: ADD_ITEM_ERROR, message: e.message});
    }
}
function* addComment(action) {
    try {
        const user = yield call(Api.addComment);
        yield put({type: ADD_COMMENT_SUCCESS, user: user});
    } catch (e) {
        yield put({type: ADD_COMMENT_ERROR, message: e.message});
    }
}

function* deleteItem(action) {
    try {
        const user = yield call(Api.deleteItem);
        yield put({type: DELETE_ITEM_SUCCESS, user: user});
    } catch (e) {
        yield put({type: DELETE_ITEM_ERROR, message: e.message});
    }
}



export default function* rootSaga() {
    yield takeEvery(REQUEST_ITEMS, fetchItems);
    yield takeEvery(ADD_ITEM, addItem);
    yield takeEvery(ADD_COMMENT, addComment);
    yield takeEvery(DELETE_ITEM, deleteItem);
}
