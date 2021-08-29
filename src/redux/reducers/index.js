import {combineReducers} from 'redux';
import notes from './notes';
import view from './view';
import edit from './edit';
import images from './images';

const allReducers = combineReducers({
    notes, view, edit, images
})

export default allReducers;