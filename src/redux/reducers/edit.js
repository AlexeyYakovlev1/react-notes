const SET_EDIT = 'SET_EDIT';

function edit(state = false, action) {
  switch(action.type) {
    case SET_EDIT:
      return state = action.payload;
    default:
      return state;
  }
}

export default edit;