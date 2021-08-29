const SET_IMAGES = 'SET_IMAGES';

const initialState = [{
  images: [],
  id: null
}]

function images(state = initialState, action) {
  switch(action.type) {
    case SET_IMAGES:
      return {
        images: action.payload,
        id: action.noteId
      };
    default:
      return state;
  }
}

export default images;