import { 
  ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, MOVE_NOTE,
  ADD_LANE, UPDATE_LANE, DELETE_LANE, DELETE_NOTES_FOR_LANE 
} from "../constants/ActionTypes";

import uuid from 'uuid';

const initialState = {
  lanes: [
    {
      id: uuid.v4(),
      name: 'Test'
    },
    {
      id: uuid.v4(),
      name: 'Test2'
    }
  ],
  notes: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    // Notes -------------------------------------------------------
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };

    case UPDATE_NOTE:
      var updatedNotes = updateNote(state.notes, action.payload);
      return { ...state, notes: updatedNotes };

    case DELETE_NOTE:      
      return { ...state, notes: state.notes.filter(note => note.id !== action.payload)}

    // Lanes -------------------------------------------------------
    case ADD_LANE:
      //return Object.assign({}, state, {lanes: [...state.lanes, action.payload] });
      return { ...state, lanes: [...state.lanes, action.payload] };

    case UPDATE_LANE:
      var updatedLanes = updateLane(state.lanes, action.payload);
      return { ...state, lanes: updatedLanes };

    case DELETE_LANE:
      return { ...state, 
        lanes: state.lanes.filter(lane => lane.id !== action.payload),
        notes: state.notes.filter(note => note.laneId !== action.payload)};
    
    // -------------------------------------------------------

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

function updateLane(lanes, updatedLane) {
  return lanes.map(lane => {
    if (lane.id === updatedLane.id) {
      return Object.assign({}, lane, updatedLane);
    }
    return lane;
  });
}

export default rootReducer;