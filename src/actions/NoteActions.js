// import alt from '../libs/alt';

// export default alt.generateActions('create', 'update', 'delete', 
// 'deleteAllForLane', 'move');

import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, DELETE_NOTES_FOR_LANE, MOVE_NOTE } from '../constants/ActionTypes';

export const addNote = lane => ({ type: ADD_NOTE, payload: note });
export const updateNote = note => ({ type: UPDATE_NOTE, payload: note });
export const deleteNote = noteId => ({ type: DELETE_NOTE, payload: noteId });
export const deleteAllForLane = laneId => ({ type: DELETE_NOTES_FOR_LANE, payload: laneId });
export const move = note => ({ type: MOVE_NOTE, payload: { note, laneId } });