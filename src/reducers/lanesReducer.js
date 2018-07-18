import {   
  ADD_LANE, UPDATE_LANE, DELETE_LANE
} from "../constants/ActionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
        
    case ADD_LANE:      
      return [...state, action.payload];

    case UPDATE_LANE:
      var updatedLanes = updateLane(state, action.payload);
      return updatedLanes; 

    case DELETE_LANE:
      return state.filter(lane => lane.id !== action.payload);
        
    default:
      return state;
  }
};

function updateLane(lanes, updatedLane) {
  return lanes.map(lane => {
    if (lane.id === updatedLane.id) {
      return Object.assign({}, lane, updatedLane);
    }
    return lane;
  });
}