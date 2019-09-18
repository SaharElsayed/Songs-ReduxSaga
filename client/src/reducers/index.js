import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import songsReducer from './songsReducer';


export default combineReducers({
    form: formReducer,
    songs: songsReducer
});