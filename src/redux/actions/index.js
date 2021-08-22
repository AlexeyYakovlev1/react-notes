export const setViewNotes = (view) => {
    return {
        type: 'SET_VIEW_NOTES',
        payload: view
    }
}

export const setNotesAction = (notes) => {
    return {
        type: 'SET_NOTES',
        payload: notes
    }
}

