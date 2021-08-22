import {combineReducers} from 'redux';
import notes from './notes';
import view from './view';

const allReducers = combineReducers({
    notes, view
})

export default allReducers;