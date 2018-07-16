import * as ActionTypes from "../constants/ActionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {    
    case ActionTypes.ADD_NOTE:
      return [...state, action.payload];      

    case ActionTypes.UPDATE_NOTE:
      var updatedNotes = updateNote(state, action.payload);
      return updatedNotes;

    case ActionTypes.DELETE_NOTE:
      return state.filter(note => note.id !== action.payload);

    case ActionTypes.DELETE_NOTES_FOR_LANE:
      return state.filter(note => note.laneId !== action.payload);

    default:
      return state;
  }
};

function updateNote(notes, updatedNote) {
  return notes.map(note => {
    if (note.id === updatedNote.id) {
      return Object.assign({}, note, updatedNote);
    }
    return note;
  });
}