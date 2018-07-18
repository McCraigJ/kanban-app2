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

    case ActionTypes.MOVE_NOTE:
      var movedNotes = moveNote(state, action.payload);
      return movedNotes;

    default:
      return state;
  }
};

function moveNote(notes, {sourceId, targetId, targetLaneId}) {
    
    const movingToEmptyLane = targetId === null;        
    
    var sourceIndex = 0;
    var targetIndex = 0;
    var foundSource = false;
    var foundTarget = false;
    var updateCurrentLane = false;    
    notes.map(note => {      
      if (note.id === sourceId) {
        if (note.laneId !== targetLaneId) {
          updateCurrentLane = true;
        }
        foundSource = true;
      }
      if (note.id === targetId) {
        foundTarget = true;
      }

      if (!foundSource) {
        sourceIndex++;
      }
      if (!foundTarget) {
        targetIndex++;
      }
      
      return note;
      
    });

    if (!(foundSource && (foundTarget || movingToEmptyLane)))  {
      return notes;
    }

    if (movingToEmptyLane) {
      targetIndex = sourceIndex;  
    }
    
    var notesWithoutSource = [...notes.slice(0, sourceIndex), ...notes.slice(sourceIndex + 1)];
    var movedNote = notes[sourceIndex];
    if (updateCurrentLane) {
      movedNote.laneId = targetLaneId;
    }
    
    return [...notesWithoutSource.slice(0, targetIndex), movedNote, ...notesWithoutSource.slice(targetIndex)];
     
}

function updateNote(notes, updatedNote) {
  return notes.map(note => {
    if (note.id === updatedNote.id) {
      return Object.assign({}, note, updatedNote);
    }
    return note;
  });
}