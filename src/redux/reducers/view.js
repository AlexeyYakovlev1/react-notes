const SET_VIEW_NOTES = 'SET_VIEW_NOTES';

function view(state = false, action) {
  switch(action.type) {
    case SET_VIEW_NOTES:
      return state = action.payload;
    default:
      return state;
  }
}

export default view;