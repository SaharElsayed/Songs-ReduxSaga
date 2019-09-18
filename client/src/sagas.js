import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_SONGS,
    RECEIVE_SONGS,
    NEW_SONG,
    CREATE_SONG,
    FETCH_SONG,
    RECEIVE_SONG,
    EDIT_SONG,
    UPDATE_SONG,
    REQUEST_DELETE,
    DELETE_SONG,
} from './actions/types';
import apis from './apis/apis';
import history from './history';


function* getSongs() {
    try {
        const response = yield call(apis.fetchSongs);
        yield put({ type: RECEIVE_SONGS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

function* addSong(action) {
    try {
        const response = yield call(apis.createSong, action.payload);
        yield put({ type: CREATE_SONG, payload: response.data });
        history.push('/');

    } catch (err) {
        console.log(err);
    }
}

function* getSong(action) {
    try {
        const response = yield call(apis.fetchSong, action.payload);
        yield put({ type: RECEIVE_SONG, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

function* updateSong(action) {
    const { id, formValues } = action.payload;
    try {
        const response = yield call(apis.editSong, id, formValues);
        yield put({ type: UPDATE_SONG, payload: response.data });
        history.push('/');

    } catch (err) {
        console.log(err);
    }
}

function* removeSong(action) {
    try {
        yield call(apis.deleteSong, action.payload);
        yield put({ type: DELETE_SONG, payload: action.payload });
        history.push('/');
    } catch (err) {
        console.log(err);
    }
}

// Get the response of the latest request(s) 
export default function* mySaga() {
    yield takeLatest(FETCH_SONGS, getSongs);
    yield takeLatest(NEW_SONG, addSong);
    yield takeLatest(FETCH_SONG, getSong);
    yield takeLatest(EDIT_SONG, updateSong);
    yield takeLatest(REQUEST_DELETE, removeSong);
}