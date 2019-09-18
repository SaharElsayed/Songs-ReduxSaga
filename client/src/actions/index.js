import {
    FETCH_SONGS,
    RECEIVE_SONGS,
    CREATE_SONG,
    NEW_SONG,
    FETCH_SONG,
    RECEIVE_SONG,
    EDIT_SONG,
    UPDATE_SONG,
    REQUEST_DELETE,
    DELETE_SONG
} from './types';


export const fetchSongs = () => ({ type: FETCH_SONGS });
export const receiveSongs = payload => ({ type: RECEIVE_SONGS, payload });

export const songCreate = formValues => ({ type: NEW_SONG, payload: formValues });
export const receiveNew = payload => ({ type: CREATE_SONG, payload });

export const fetchSong = id => ({ type: FETCH_SONG, payload: id });
export const receiveSong = payload => ({ type: RECEIVE_SONG, payload });

export const editSong = (id, formValues) => ({ type: EDIT_SONG, payload: { id, formValues } });
export const receiveEdit = payload => ({ type: UPDATE_SONG, payload });

export const deleteSong = id => ({ type: REQUEST_DELETE, payload: id });
export const receiveDelete = payload => ({ type: DELETE_SONG, payload });
