// import alt from '../libs/alt';

// export default alt.generateActions('create', 'update', 'delete'); //, 'attachToLane', 'detachFromLane');

import {ADD_LANE, UPDATE_LANE, DELETE_LANE} from '../constants/ActionTypes';

export const addLane = lane => ({type: ADD_LANE, payload: lane});
export const updateLane = lane => ({type: UPDATE_LANE, payload: lane});
export const deleteLane = laneId => ({type: DELETE_LANE, payload: laneId});