export const setViewNotes = view => {
    return {
        type: 'SET_VIEW_NOTES',
        payload: view
    }
}

export const setNotesAction = notes => {
    return {
        type: 'SET_NOTES',
        payload: notes
    }
}

export const setEditAction = edit => {
  return {
      type: 'SET_EDIT',
      payload: edit
  }
}

export const setImagesAction = (images, id) => {
  return {
    type: 'SET_IMAGES',
    payload: images,
    noteId: id
  }
}