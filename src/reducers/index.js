import { ADD_NOTE, ADD_LANE } from "../constants/ActionTypes";
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
    case ADD_LANE:
      return { ...state, lanes: [...state.lanes, action.payload] };
      //return Object.assign({}, state, {lanes: [...state.lanes, action.payload] });
    // case ADD_ARTICLE:
    //   return { ...state, articles: [...state.articles, action.payload] };      
    //   //return { articles: [...state.articles, action.payload] };      
    case ADD_NOTE:      
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;