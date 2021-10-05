import {combineReducers} from 'redux';
import notes from './notes';
import view from './view';
import edit from './edit';

const allReducers = combineReducers({
    notes, view, edit
})

export default allReducers;