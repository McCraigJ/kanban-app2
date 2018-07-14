import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, DELETE_NOTES_FOR_LANE, MOVE_NOTE } from '../constants/ActionTypes';

export const addNote = note => ({ type: ADD_NOTE, payload: note });
export const updateNote = note => ({ type: UPDATE_NOTE, payload: note });
export const deleteNote = noteId => ({ type: DELETE_NOTE, payload: noteId });
export const deleteAllForLane = laneId => ({ type: DELETE_NOTES_FOR_LANE, payload: laneId });
export const moveNote = (noteId, targetNoteId, laneId) => ({ type: MOVE_NOTE, payload: { noteId, targetNoteId, laneId } });