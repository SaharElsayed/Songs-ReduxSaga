import _ from 'lodash';
import {
    RECEIVE_SONGS,
    CREATE_SONG,
    RECEIVE_SONG,
    UPDATE_SONG,
    DELETE_SONG
} from '../actions/types';

export default (state = {}, action) => {

    switch (action.type) {
        case RECEIVE_SONGS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case CREATE_SONG:
            return { ...state, [action.payload.id]: action.payload };
        case RECEIVE_SONG:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_SONG:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_SONG:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}