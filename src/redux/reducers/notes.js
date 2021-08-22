const SET_NOTES = 'SET_NOTES';

const initialState = {
    items: [],
    isLoaded: false
}

function notes(state = initialState, action) {
    switch(action.type) {
        case SET_NOTES:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

export default notes;